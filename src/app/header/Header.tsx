import React from 'react';

import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

const mockLinks = [{ name: 'Яндекс', url: 'https://yandex.ru' }];
function Header() {
  return (
    <>
      <DesktopHeader links={mockLinks} />
      <MobileHeader links={mockLinks} />
    </>
  );
}
export { Header };
