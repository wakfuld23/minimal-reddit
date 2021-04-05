import styled from "styled-components";
import ReactHlsPlayer from "react-hls-player";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { HiTrendingUp, HiHome } from "react-icons/hi";
import { MdFiberNew, MdWhatshot } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import {
  BsFillBarChartFill,
  BsFillBookmarkFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { RiBookFill, RiNotification4Fill } from "react-icons/ri";
import { BiUpvote, BiMessageSquareDetail } from "react-icons/bi";

import { Link } from "react-router-dom";

// const color = {
//   text: 'fff',
//   colorPrimary200: "#b2bdcd",
//   colorPrimary300: "#5d7290",
//   colorPrimary600: "#323d4d",
//   colorPrimary700: "#242c37",
//   colorPrimary800: "#151a21",
//   colorSecondary: "#5575e7",
//   colorAccentGlow: "rgba(253,77,77,0.3)",
//   colorAccent: "#fd4d4d",
//   colorAccentHover: "#fd6868",
// };

const color = {
  text: '#000000',
  colorPrimary200: "#b2bdcd",
  colorPrimary300: "#5d7290",
  colorPrimary600: "grey",
  colorPrimary700:"lightgrey",
  colorPrimary800: "white",
  colorSecondary: "#5575e7",
  colorAccentGlow: "rgba(253,77,77,0.3)",
  colorAccent: "#fd4d4d",
  colorAccentHover: "#fd6868",
};

export const AppDiv = styled.div`
  background-color: ${color.colorPrimary800};
  height: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: lighgrey;
  border-radius: 8px;
  outline: none;
  border: none;
  margin: 1em;
  background-color: ${color.colorAccent};
  &:hover {
    /* background-color: ${color.colorAccentHover}; */
  }
`;
export const Linked = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${color.colorAccentHover};
  }
`;

export const LinkedSort = styled(Linked)`
  align-self: flex-end;
  font-weight: 700;
  padding-bottom: 8.8px;
  padding-left: 0.5em;
  color: ${(props) => (props.active === 1 ? color.colorAccent : color.text)};
`;

export const ArrowDown = styled(TiArrowDownThick)`
  align-self: center;
  width: 20px;
  height: auto;
  color: ${(props) =>
    props.focus ? color.colorPrimary200 : color.colorAccent};
  cursor: pointer;
  &:hover {
    color: ${color.colorAccentHover};
  }
`;

export const SaveIcon = styled(BsFillBookmarkFill)`
  vertical-align: middle;
  padding-left: 1em;
  width: 20px;
  height: auto;
  color: ${(props) =>
    props.saved === 1 ? color.colorAccent : color.colorPrimary200};
  cursor: pointer;
  &:hover {
    color: ${color.colorAccentHover};
  }
`;

export const ArrowUp = styled(TiArrowUpThick)`
  align-self: center;
  width: 20px;
  height: auto;
  cursor: pointer;
  color: ${(props) =>
    props.focus === 1 ? color.colorAccent : color.colorPrimary200};
  &:hover {
    color: ${color.colorAccentHover};
  }
`;

export const SubReddit = styled.div`
  font-family: Segoe UI SemiBold;
  font-size: 15px;
  color: ${color.colorPrimary300};
  text-decoration: none;
  cursor: pointer;
  align-self: center;
  margin-left: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin: auto;
  width: 680px;
  /* border-radius: 14px; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  /* border: 1px solid black; */
  background-color: ${color.colorPrimary700};
  margin-bottom: 1em;
  display: hidden;
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 2em;
    margin-right: 2em;
  }
`;

export const Title = styled.h2`
  font-family: Segoe UI Semibold;
  font-size: 15px;
  color: ${color.text};
  padding: 0.75em 1em 0 0.5em;
  padding-left: 0.5em;
  /* border-bottom: 1px solid black; */
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 40px;
  justify-self: flex-end;
  padding-left: 1em;
  padding-right: 1em;
`;

export const Upvotes = styled.div`
  display: flex;
  flex-direction: columns;
  justify-self: start;
  align-self: center;
`;

export const Content = styled.p`
  padding: 1em 2em;
  font-size: 14px;
  /* border-bottom: 1px solid black; */
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

export const PostHeader = styled.div`
  display: flex;
`;

export const ContentImage = styled.img`
  margin: auto;
  object-fit: contain;
  width: 100%;
  max-height: 1000px;
  display: block;
  margin: auto;
  background-color: black;
`;

export const SubTitle = styled.div`
  color: ${color.colorPrimary300};
  font-family: Segoe UI Light;
  font-size: 13px;
`;

export const Video = styled(ReactHlsPlayer)`
  max-height: 90vh;
  max-width: 100%;
  background-color: black;
`;
export const Text = styled.div`
  color: ${color.text};
  padding: 4px 1em 1em 1em;
  font-family: Segoe UI;
  font-size: 15px;
  p {
    margin-bottom: 1em;
  }
`;

export const Enlace = styled.a`
  white-space: pre-line;
  font-family: Segoe UI;
  font-size: 15px;
`;

export const UpvotesNum = styled.p`
  font-family: Segoe UI SemiBold;
  font-size: 15px;
  color: ${color.colorPrimary300};
  margin: 0;
`;

export const Comments = styled(UpvotesNum)`
  margin: auto;
  color: ${color.colorPrimary300};
  font-family: Segoe UI SemiBold;
`;

export const Input = styled.input`
  border-radius: 8px;
  background-color: ${color.colorPrimary600};
  height: 30px;
  width: 80%;
  place-self: center;
  outline: none;
  border: none;
`;

export const TrendingContainer = styled.div`

justify-self: center;
background-color:${color.colorPrimary700};
height:fit-content;
width:80%;
place-content:center;
border-radius:8px;
`

export const Login = styled.a`
  width: 60px;
  justify-self: end;
  border: none;
  align-self: center;
  border-radius: 1em;
  padding: 0.75em;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  color: ${color.text};
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: ${color.text};
    color: black;
  }
`;

export const Logo = styled.a`
  display: inline-block;
  padding: 1em 1em 0 0.5em;
  font-size: 20px;
  color: ${color.colorAccent};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  font-family: Poppins;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  height: 55px;
  justify-content: center;
  margin-bottom: 2em;
  background-color: ${color.colorPrimary800};
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Section = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 680px 1fr;
  background-color: ${color.colorPrimary800};
`;

export const NavLogo = styled.div`
  width: 250px;
  height: 100vh;
  position: sticky;
  top: 0;
  justify-self: end;
  display: grid;
  grid-template-rows: auto;
  gap: 50px;
`;

export const BtnSort = styled.h3`
  padding: 0.5em 1em;
  width: fit-content;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  gap: 0.5em;
  align-items: center;
  &:hover {
    /* background-color: ${color.colorAccentHover}; */
  }
`;

export const JoinBtn = styled.p`
  margin-left: auto;
  border-radius: 20px;
  padding: 0.5em 1em;
  align-self: center;
  background-color: ${color.colorAccent};
  cursor: pointer;
  color:white;
`;

export const BtnCreate = styled.h3`
  margin-top: 1em;
  padding: 0.5em 1.5em;
  width: 150px;
  background-color: ${color.colorAccent};
  text-align: center;
  border-radius: 20px;
`;

export const Avatar = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: row;
  border-radius: 20px;
  margin-right: 2em;
  padding: 0.25em;
  &:hover {
    background-color: ${color.colorAccentGlow};
  }
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
`;

export const User = styled.div`
  align-items: center;
`;

export const Username = styled.h4`
  padding-left: 1em;
  font-size: 15px;
  font-weight: 700;
  span {
    font-weight: 500;
  }
`;

export const Sorting = styled.div`
  position: sticky;
  top: 0;
  background-color: ${color.colorPrimary800};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 60px;
`;

export const SortingElement = styled.div`
  place-self: center;
`;

export const SortingContainer = styled.div`
  display: grid;
  border-bottom: ${(props) =>
    props.active === 1 ? "1px solid" + color.colorAccent : "none"};
  :hover {
    border-bottom: 1px solid ${color.colorAccent};
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
`;

export const CommentImageDiv = styled.div`
  width: 35px;
  display: grid;
  place-content: center;
`;

export const CommentImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: auto;
`;

export const RepliesP = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-family: Segoe UI SemiBold;
  color: #65676b;
  text-align: center;
  font-size: 15px;
  padding-bottom: 0.5em;
`;

export const RepliesDiv = styled.div`
  border-left: 0.5px solid grey;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  padding-left: 5px;
  border-bottom-width: 10px;
  margin-bottom: 10px;
`;

export const NewIcon = styled(MdFiberNew)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : color.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;

export const HotIcon = styled(MdWhatshot)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : color.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;
export const BestIcon = styled(IoRocketSharp)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : color.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;

export const TopIcon = styled(BsFillBarChartFill)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : color.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;

export const RisingIcon = styled(HiTrendingUp)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : color.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;

export const HomeIcon = styled(HiHome)`
  color: ${color.text};
`;

export const PostsIcon = styled(RiBookFill)`
  color: ${color.text};
`;

export const SaveIconNav = styled(BsFillBookmarkFill)`
  color: ${color.text};
`;

export const UpvotedIcon = styled(BiUpvote)`
  color: ${color.text};
`;

export const NotificationIcon = styled(RiNotification4Fill)`
  color: ${color.text};
`;

export const MessagesIcon = styled(BiMessageSquareDetail)`
  color: ${color.text};
`;

export const ProfileIcon = styled(BsFillPersonFill)`
  color: ${color.text};
`;
