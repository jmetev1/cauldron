import React from 'react';
import PropTypes from 'prop-types';

interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  show?: boolean;
}

const NavItem = ({ children, ...other }: NavItemProps): JSX.Element => (
  <li {...other}>{children}</li>
);

NavItem.displayName = 'NavItem';
NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool
};

export default NavItem;
