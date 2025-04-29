const images = [
  'https://net-static-dev.chainbasehq.com/public/blockchains/logos/unichain-logo.png',
  'https://net-static-dev.chainbasehq.com/public/blockchains/logos/scroll-logo.png',
  'https://net-static-dev.chainbasehq.com/public/blockchains/logos/mantle-mnt-logo.png',
];

export default function App() {
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
      <div>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '16px',
            marginBottom: '12px',
            cursor: 'pointer',
          }}>
          Tracing the thoughts of a large language model
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
            {images.map((src, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  left: `${index * 16}px`,
                  transition: 'transform 0.1s ease, z-index 0.1s',
                }}>
                <img
                  src={src}
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
                    parent.style.zIndex = '1';
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
            Trending now · 144 tas · 12 hours ago
          </p>
        </div>
      </div>
      <p
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
