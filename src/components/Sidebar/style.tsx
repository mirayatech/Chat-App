import styled from '@emotion/styled'

import { theme } from '../../styles/theme'

export const SideBar = styled.div`
  width: 350px;
  height: 100vh;
  border-right: 1px solid ${theme.Border};
  @media screen and (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`

export const Navbar = styled.div`
  height: 80px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.Border};
`

export const Wrapper = styled.div`
  display: flex;
`

export const ProfileButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ChatButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  margin-right: 20px;
  border-radius: 50%;
  align-items: center;
  color: ${theme.Black};
  justify-content: center;
  background-color: ${theme.Border};
`

export const ProfilePicture = styled.img`
  width: 40px;
  border-radius: 50%;
`

export const SecondaryContainer = styled.div`
  position: relative;
`

export const PrimaryContainer = styled.div`
  position: relative;
`

export const ShowProfileButton = styled.button`
  display: block;
  width: 100%;
  border: none;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 20px;
  align-items: center;
  color: ${theme.Black};
  transition: all 0.2s ease;
  background-color: transparent;
  &:hover {
    background-color: ${theme.Border};
  }
`

export const SignOutButton = styled.button`
  border: none;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  color: #eb4e4e;
  padding: 10px 20px;
  align-items: center;
  transition: all 0.2s ease;
  background-color: transparent;
  &:hover {
    background-color: ${theme.Border};
  }
`
