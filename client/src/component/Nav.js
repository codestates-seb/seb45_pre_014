import { faEarthAmericas, faCircleExclamation, faStar, faBriefcase, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivContainer = styled.div`
  width: 200px;
  float: left;
  display: inline;
  margin-bottom: auto;
  margin-top: 21px;
  li {
    list-style: none;
  }
  > div {
    padding: 4px 0px 4px 8px;
  }
`;

export const Nav01 = styled.ol`
  padding: 0;
  > li:first-child {
    font-size: 13px;
    font-weight: 500;
    line-height: 26px;
    div {
        cursor: pointer;
    }
    color: #0c0d0e;
    background-color: #f2f2f3;
    border-right: 3px slid #f48424;
  }
  
  span {
    font-size: 13px;
    cursor: pointer;
    color: #525260;
    padding: 8px 6px 8px 8px;

    &:hover {
        color: #0c0d0e;
    }
  }

  > li:nth-child(3) {
    font-size: 11px;
    color: #6a737c;
    margin: 24px 0 4px 0px;
  }

  > li:nth-child(4) {
    color: #f48424;
  }

  button {
    margin: 8px 8px 0 0;
    padding: 8px;
    border: none;
    background: none;
    outline: none;
    box-shadow: none;
    border-radius: 4px;
    color: #0064bf;
    background-color: #eff8ff;
    cursor: pointer;
    &:hover {
        color: #004585;
    }
  }
`;

export const ListChild = styled.li`
  > ol {
    margin-bottom: 12px;
    padding: 0px;
  }

  li:first-child {
    margin: 10px 0px 4px 0px;
    padding: 0px;
    font-size: 11px;
    color: #6a737c;
  }

  > ol > li:not(:first-child, :last-child, :nth-last-child(2)) {
    text-align: left;
    font-size: 13px;
    line-height: 26px;
    color: #525960;
    padding: 4px 4px 4px 14px;
    height: 30px;

    :hover {
        color: #0c0d0e;
    }
  }

  > ol > li:nth-last-child(6) {
    padding: 4px 4px 4px 0px;
  }

  li:nth-last-child(2) {
    margin: 16px 0px 10px 0px;
    font-size: 11px;
    cursor: auto;
    color: #6a737c;
  }

  > ol > li:last-child {
    > svg {
        color: #f48424;
    }
  }
`;

export const FontAwesomeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
  
  > svg {
    cursor: pointer;
    :hover {
        color: black;
    }
  }
`;

export const HoverDiv = styled.div`
  height: 30px;
  
  :hover {
    background-color: #f9f9f9;
    border-right: 3px solid #f48424;
  }
`;

const Nav = () => {
    return (
        <DivContainer>
            <div>
                <nav role="navigation">
                    <Nav01>
                        <li>
                          <Link to="/Home">
                            <HoverDiv>Home</HoverDiv>
                          </Link>
                        </li>
                        <ListChild>
                            <ol>
                                <li>PUBLIC</li>
                                <li>
                                    <div>
                                        <FontAwesomeIcon
                                          className="font-awesome"
                                          icon={faEarthAmericas}
                                        />
                                        <Link to="/board/?page=1">
                                        <span className="font-icon">Questions</span>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Tags</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Users</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Companies</span>
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeDiv>
                                        COLLECTIVE
                                        <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
                                    </FontAwesomeDiv>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} size="xs" />
                                    <span>Explore Collectives</span>
                                </li>
                            </ol>
                        </ListChild>
                        <li>
                            <FontAwesomeDiv>
                                Teams
                                <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
                            </FontAwesomeDiv>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faBriefcase} size="xs" />
                                <span>Create free Teams</span>
                            </div>
                        </li>
                        <li>
                            <button>Looking for your Teams?</button>
                        </li>
                    </Nav01>
                </nav>
            </div>
        </DivContainer>
    );
};

export default Nav;