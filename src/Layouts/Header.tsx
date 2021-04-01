import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import styled, { DefaultTheme } from 'styled-components';
// import Select from '@paljs/ui/Select';
import { LayoutHeader } from '@paljs/ui/Layout';
// import { EvaIcon } from '@paljs/ui/Icon';
// import { Button } from '@paljs/ui/Button';
import { Actions } from '@paljs/ui/Actions';
// import ContextMenu from '@paljs/ui/ContextMenu';
// import User from '@paljs/ui/User';
// import { breakpointDown } from '@paljs/ui/breakpoints';

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .logo {
    font-size: 1.55rem;
    white-space: nowrap;
    text-decoration: none;
  }
`;

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  // const router = useRouter();

  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <Actions
          size="Medium"
          actions={[
            {
              content: (
                <Link href="/">
                  <a className="logo">Admin Template</a>
                </Link>
              ),
            },
            {
              icon: { name: 'menu-2-outline' },
              url: {
                onClick: props.toggleSidebar,
              },
            },
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
};
export default Header;
