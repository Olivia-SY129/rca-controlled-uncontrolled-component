import React from "react";

class UncontrolledComponent extends React.Component {
  inputRef = React.createRef();

  render() {
    console.log("initial render: ", this.inputRef);
    return (
      <div>
        {/* <input id="my-input" /> */}
        <input ref={this.inputRef} />
        <button onClick={this.click}>Submit</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    // input element의 value를 꺼내서 전송
    // real DOM 을 쓰는 것은 지양하자. 추천하지 않는 방법!
    // const input = document.querySelector("#my-input");
    // console.log(input.value);

    // 대신 Ref를 이용해 value를 가져오기
    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledComponent;
