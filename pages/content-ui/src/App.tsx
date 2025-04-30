/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

function App() {
  const { data } = useQuery({
    queryKey: ['trench-data'],
    queryFn: async () => {
      const res = await fetch('https://mindshare.chainbase.com/api/trench_hotspots?page=1&pageSize=4');
      const result: {
        data: {
          created_at: string;
          keyword: string;
          score: number;
          tweets: {
            user_screen_name: string;
            user_profile_image_url_https: string;
          }[];
        }[];
      } = await res.json();

      return result.data;
    },
    staleTime: 1000 * 60 * 15,
  });

  console.log({ data });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        gap: '8px',
      }}>
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
            width: '56px',
            height: '22px',
            flexShrink: 0,
            borderRadius: '4px',
            background: '#FFEDDB',
          }}>
          <p
            style={{
              color: '#692100',
              fontSize: '14px',
              fontWeight: 500,
            }}>
            BETA
          </p>
        </div>
      </div>
      {data?.map((x, i) => (
        <div key={i} style={{ padding: '12px 0px 8px' }}>
          <p
            onClick={() => window.open(`https://trench-cb.vercel.app/at/${x.keyword}`, '_blank')}
            style={{
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '16px',
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
              borderBottom: '1px solid #9a9a9a3e',
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
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
          color: '#32A4F1',
          fontSize: '14px',
          fontWeight: 400,
          cursor: 'pointer',
        }}>
        Show more - Powered by Chainbase
      </p>
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
  const diff = now.getTime() - date.getTime(); // 时间差，以毫秒为单位

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
