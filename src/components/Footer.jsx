import React from 'react';

function Footer({ scrollToStart }) {
  return (
    <footer className="footer">
      <button onClick={scrollToStart}>Back to top</button>
      <p>© 2024 My News Portal. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
