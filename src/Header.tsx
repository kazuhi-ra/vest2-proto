import React, { FC } from 'react'
import styled from '@emotion/styled'

type Props = {}

const Header: FC<Props> = () => (
  <StyledHeader>
    <HeaderLimitter>
      <StyledH1>
        <StyledA href='/'>あしたのベストNext</StyledA>
      </StyledH1>
      <StyledNav>
        <StyledNavA href='/vests'>ベスト一覧</StyledNavA>
        <StyledNavA href='/posts'>みんなの投稿</StyledNavA>
        <StyledNavA
          href='https://www.amazon.jp/hz/wishlist/ls/24ZYKIXEM3SQV?ref_=wl_share'
          target='_blank'
        >
          応援する
        </StyledNavA>
      </StyledNav>
    </HeaderLimitter>
  </StyledHeader>
)

const StyledHeader = styled('header')`
  background-color: #17223b;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  padding: 20px 40px;
  height: 80px;
  box-sizing: border-box;
`
const HeaderLimitter = styled('div')`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
`

const StyledH1 = styled('h1')`
  float: left;
  line-height: 40px;
  margin: 0;
  font-size: 24px;
`

const StyledA = styled('a')`
  color: #ffffff;
  text-decoration: none;
`

const StyledNav = styled('nav')`
  float: right;
  height: 40px;
  line-height: 40px;
`

const StyledNavA = styled('a')`
  display: inline-block;
  padding: 0 5px;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.65;
  font-size: 16px;
`

export default Header
