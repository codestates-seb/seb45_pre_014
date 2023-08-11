import styled from "styled-components";
/* eslint-disable react/prop-types */
// props 에러 해결 주석

const SearchModal = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 7px 0 #ccc;
  position: absolute;
  top: 42px;
  z-index: 2;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: left;
  ul {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0;
  }
  .modalTriangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #fff;
    border-right: 10px solid transparent;
    z-index: 2;
    position: absolute;
    top: -20px;
    left: 50%;
  }
`;

const ModalList = styled.li`
  z-index: 3;
  display: inline-block;
  padding: 7px 10px;
  h4 {
    display: inline;
  }
  span {
    color: #545454;
    padding: 0 5px;
    font-size: 14px;
  }
`;
const SearchBoxModal = ({ isFocused }) => {
  return (
    <SearchModal className={isFocused ? "" : "hide"}>
      <ul>
        <ModalList>
          <h4>[tag]</h4>
          <span>search within a tag</span>
        </ModalList>
        <ModalList>
          <h4>user:1234</h4>
          <span>search by author</span>
        </ModalList>
        <ModalList>
          <h4>&quot;words here&quot;</h4>
          <span>exact phrase</span>
        </ModalList>
        <ModalList>
          <h4>collective:&quot;Name&quot;</h4>
          <span>collective content</span>
        </ModalList>
      </ul>
      <ul>
        <ModalList>
          <h4>answer:0</h4>
          <span>unanswered questions</span>
        </ModalList>
        <ModalList>
          <h4>score:3</h4>
          <span>posts with a 3+ score</span>
        </ModalList>
        <ModalList>
          <h4>is:question</h4>
          <span>type of post</span>
        </ModalList>
        <ModalList>
          <h4>isaccepted:yes</h4>
          <span>search within status</span>
        </ModalList>
      </ul>
      <div className={isFocused ? "modalTriangle" : "modalTriangle hide"}></div>
    </SearchModal>
  );
};

export default SearchBoxModal;