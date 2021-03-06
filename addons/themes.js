const React = require('react')
const { Checkbox } = require('semantic-ui-react')

function addStyle(id, css) {
  removeStyle('switch-theme')
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')

  style.id = id
  style.type = 'text/css'

  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }

  head.appendChild(style)
}

function removeStyle(id) {
  const element = document.getElementById(id)
  if (element) {
    element.remove()
  }
}

class SwitchTheme extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      checked: !!this.props.isChecked()
    }
    this.toggleStyle(this.state.checked)
  }

  toggleStyle(toggle) {
    if (toggle) {
      addStyle('switch-theme', this.props.themeA)
    } else {
      addStyle('switch-theme', this.props.themeB)
    }
  }

  handleClick() {
    const toggle = !this.props.isChecked()
    this.toggleStyle(toggle)
    this.props.onChange(toggle)
    this.setState({ checked: toggle })
  }

  render() {
    return React.createElement(
      'div',
      {
        style: {
          zIndex: 1000,
          position: 'fixed'
        },
        onClick: this.handleClick.bind(this)
      },
      React.createElement(
        Checkbox,
        {
          style: { margin: 20 },
          label: 'Dark theme',
          slider: true,
          checked: this.state.checked
        },
        null
      )
    )
  }
}

export default (themeA, themeB, isChecked, onChange) => storyFn => {
  return [
    React.createElement(
      SwitchTheme,
      {
        themeA: themeA,
        themeB: themeB,
        isChecked: isChecked,
        onChange: onChange
      },
      null
    ),
    storyFn()
  ]
}
