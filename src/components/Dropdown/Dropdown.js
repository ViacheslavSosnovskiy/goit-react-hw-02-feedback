import React from 'react'

class Dropdown extends React.Component {
  state = {
      visible: false;
  }

//   show = () => {
//       this.setState({visible: true})
//   }

//   hide = () => {
//     this.setState({visible: false})
// }

  toggle = () => {
      this.setState(prevState) => ({
        visible: !prevState.visible,
      })
  }

    render() {
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle" onClick={this.show}>
                   
                </button>

                {/* <button className="Dropdown__toggle" onClick={this.hide}>
                    Скрыть
                </button> */}

                {this.state.visible && (
                    <div>Выпадающее меню</div>
                )}
            </div>
        )
    }
}

export default Dropdown;