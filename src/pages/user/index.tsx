import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';

const ChatHome = () => (
  <>
    <ToonChatHead title="Friends" />
    <section css={pageCSS}>
      index
      <BottomNavigation pageName="Home" />
    </section>
  </>
);

export default ChatHome;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;