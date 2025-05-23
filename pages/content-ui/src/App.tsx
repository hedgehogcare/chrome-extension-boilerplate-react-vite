/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Modal, Box } from '@mui/material';
import { useState } from 'react';

const queryClient = new QueryClient();

export default function Root({ theme }: { theme: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <App theme={theme} />
    </QueryClientProvider>
  );
}

function App({ theme }: { theme: string }) {
  const { data, isError, refetch, isPending, isFetching, isRefetching } = useQuery({
    queryKey: ['trench-data'],
    queryFn: async () => {
      const res: {
        data: {
          created_at: string;
          keyword: string;
          score: number;
          tweets: {
            user_screen_name: string;
            user_profile_image_url_https: string;
          }[];
        }[];
      } = await chrome.runtime.sendMessage({ type: 'FETCH_USER' });

      return res.data?.sort(() => Math.random() - 0.5).slice(0, 4);
    },
    staleTime: 1000 * 60 * 15,
  });

  const [trenchUrl, setTrenchUrl] = useState('');

  const borderColor = theme === 'dark' ? 'rgb(47, 51, 54)' : theme === 'dim' ? 'rgb(56, 68, 77)' : 'rgb(239, 243, 244)';
  const linkTextColor = '#1d9bf0';

  const needRetry = data?.length === 0 || isError;

  return (
    <div
      style={{
        display: data ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '16px',
        gap: '4px',
        border: `1px solid ${borderColor}`,
        borderRadius: '16px',
      }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      {isPending || isFetching || isRefetching ? (
        <div style={{ position: 'relative', width: 24, height: 24, margin: 'auto' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: '3px solid rgb(43 175 255 / 30%)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: '3px solid transparent',
              borderTopColor: linkTextColor,
              borderRadius: '50%',
              animation: 'spin 0.65s linear infinite',
            }}
          />
        </div>
      ) : needRetry ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p
            style={{
              color: '#737A7F',
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '12px',
            }}>
            Something went wrong. Try reloading.
          </p>
          <div
            onClick={() => refetch()}
            style={{
              height: '36px',
              borderRadius: '32px',
              paddingLeft: '16px',
              paddingRight: '16px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#1DA1F2',
              fontWeight: 600,
              gap: '6px',
              cursor: 'pointer',
            }}>
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'rgb(255, 255, 255)', width: '21px' }}>
              <g>
                <path d="M12 4c-4.418 0-8 3.58-8 8s3.582 8 8 8c3.806 0 6.993-2.66 7.802-6.22l1.95.44C20.742 18.67 16.76 22 12 22 6.477 22 2 17.52 2 12S6.477 2 12 2c3.272 0 6.176 1.57 8 4V3.5h2v6h-6v-2h2.616C17.175 5.39 14.749 4 12 4z"></path>
              </g>
            </svg>
            Retry
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <p
              style={{
                fontSize: '22px',
                fontWeight: 700,
              }}>
              Trench
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '20px',
                flexShrink: 0,
                borderRadius: '4px',
                background: '#FFEDDB',
              }}>
              <p
                style={{
                  color: '#692100',
                  fontSize: '12px',
                  fontWeight: 500,
                }}>
                BETA
              </p>
            </div>
          </div>
          {data?.map((x, i) => (
            <div key={i} style={{ padding: '12px 0px 8px' }}>
              <p
                onClick={() => setTrenchUrl(`https://trench-cb.vercel.app/at/${x.keyword}`)}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '20px',
                  marginBottom: '12px',
                  cursor: 'pointer',
                }}>
                {x.keyword}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '18px',
                  borderBottom: `1px solid ${borderColor}`,
                }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    height: '24px',
                    flexGrow: 1,
                  }}>
                  {getThreeUniqueById(x.tweets).map((y, index) => (
                    <div
                      onClick={() => {
                        window.open(`https://x.com/${y.user_screen_name}`, '_blank');
                      }}
                      key={index}
                      style={{
                        position: 'absolute',
                        left: `${index * 16}px`,
                        transition: 'transform 0.1s ease, z-index 0.1s',
                        zIndex: 3 - index,
                      }}>
                      <img
                        src={y.user_profile_image_url_https}
                        alt=""
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '24px',
                          border: '1px solid white',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease',
                        }}
                        onMouseEnter={e => {
                          const parent = e.currentTarget.parentElement!;
                          parent.style.zIndex = '10';
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={e => {
                          const parent = e.currentTarget.parentElement!;
                          parent.style.zIndex = (3 - index).toString();
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    color: '#737A7F',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}>
                  Trending now · {Math.ceil(x.score * 100)} tas · {timeAgo(new Date(x.created_at))}
                </p>
              </div>
            </div>
          ))}

          <p
            onClick={() => window.open('https://trench-cb.vercel.app/', '_blank')}
            style={{
              color: linkTextColor,
              fontSize: '14px',
              fontWeight: 400,
              cursor: 'pointer',
            }}>
            Show more - Powered by Chainbase
          </p>
        </>
      )}
      <Modal open={trenchUrl !== ''} onClose={() => setTrenchUrl('')}>
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            height: '80vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 0,
            outline: 'none',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
          <iframe src={trenchUrl} title="网页嵌入" style={{ width: '100%', height: '100%', border: 'none' }} />
        </Box>
      </Modal>
    </div>
  );
}

function getThreeUniqueById(
  arr: {
    user_screen_name: string;
    user_profile_image_url_https: string;
  }[],
) {
  const seenIds = new Set();
  const result = [];

  const shuffled = [...arr].sort(() => Math.random() - 0.5);

  for (const item of shuffled) {
    if (!seenIds.has(item.user_screen_name)) {
      seenIds.add(item.user_screen_name);
      result.push(item);
    }
    if (result.length === Math.min(3, arr.length)) break;
  }

  return result;
}

function timeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 7) return `${days} days ago`;
  if (weeks < 4) return `${weeks} weeks ago`;
  if (months < 12) return `${months} months ago`;
  return `${years} years ago`;
}
