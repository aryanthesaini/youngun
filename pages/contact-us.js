import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <a
            href='https://www.instagram.com/youngun.in/'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              fontSize: '2rem',
              textDecoration: 'none',
              color: 'black',
            }}>
            <br />
            <br />
            <p>
              <span>-&gt;</span> Click here to rech out to us @youngun.in
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
