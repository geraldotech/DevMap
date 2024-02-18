import '../../../src/App.css'
import { FaAddressBook } from 'react-icons/fa6'
import Select from './PropsPage1/Select-child'
import Button from './PropsPage1/ButtonClickChildren'
import ButtonMultiEventProps from './PropsPage1/Button-event-props'
import ButtonSpread from './PropsPage1/Button-spread'
import ButtonRest from './PropsPage1/ButtonRest'
import ButtonClassChallenge from './PropsPage1/ButtonChallenge'
import Avatar from '../Avatar/Avatar'
import Menu from '../Menu/Menu'
import MenuChallenge from './MenuChallengePage1/Menu'
import MenuButton from './MenuChallengePage1/MenuButton'
import MenuDropdown from './MenuChallengePage1/MenuDropdown'
import MenuItem from './MenuChallengePage1/MenuItem'

function App() {
  const sports = ['Tennis', 'Racquetal', 'Pickball', 'Squash']
  /* AUTO CLEAR CONSOLE FOR BETTER DEV EXPERIENCE */
  setTimeout(() => {
    //console.clear()
  }, 2000)

  return (
    <>
      <h1>Advanced React</h1>
      <p>Para relevar os módulos remover a classe hidden</p>
      <p>
        vite host use:{' '}
        <strong>
          <code> npm run dev -- --host</code>
        </strong>
      </p>
      <h2>1 - Buttons, props</h2>
      <section className="hidden">
        <p>children props is powerful</p>
        <Button onClick={() => console.log(`hello`)}>
          <FaAddressBook />
          Add cart!
        </Button>

        <hr></hr>
        <ButtonMultiEventProps onMouseOver={() => console.log(`move over ok`)} onClick={() => console.warn(`click me`)}>
          <span>Button props.event</span>
        </ButtonMultiEventProps>
        <hr></hr>
        <Select text="Select a Number">
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </Select>

        <hr></hr>
        <ButtonSpread style={{ color: 'green' }} onClick={() => console.warn(`click ok`)}>
          USING SPREAD
        </ButtonSpread>
        <hr></hr>
        <ButtonRest variant style={{ color: 'green' }} onClick={() => console.warn('%cLogging in...', 'color:dodgerblue;font-size:1rem;')}>
          DESTRUCTING PROPS
        </ButtonRest>
        <hr></hr>

        <ButtonClassChallenge size="lg" className="green" variant="warning">
          Button challenge
        </ButtonClassChallenge>

        <ButtonClassChallenge size="sm" className="green" variant="danger">
          Button challenge
        </ButtonClassChallenge>

        <ButtonClassChallenge size="lg" className="green" variant="success">
          Button challenge
        </ButtonClassChallenge>
      </section>
      <h2>2 - Avatar Component</h2>
      <section className="hidden">
        <Avatar src="https://pedrocarvh.netlify.app/images/KING.png" alt="king photo"></Avatar>
        <hr></hr>
        <Avatar>
          <img src="https://cdn.dribbble.com/userupload/12773132/file/original-9d796f7c8ed830a769c673564bf20d47.jpg?resize=752x941" />
        </Avatar>
        <hr></hr>
        <Avatar />
      </section>

      <h2>3 - Menu</h2>
      <section className="hidden">
        <Menu className="button" buttonText="Sports List" items={['Tenis', 'Racquetal', 'Pickball', 'Squash']} />

        <hr></hr>
        <h2>What we'll learn</h2>
        <ul>
          <li>
            <dl>
              <dt>
                <b>Compounded Components</b>
              </dt>
              <dd> Use children props, </dd>
              <dd> Have dedicated function / styling </dd>
              <dd> Make the component stricture more transparent</dd>
            </dl>
          </li>

          <li> React.Children API</li>
          <li>Contenxt</li>
          <li> Implicit State</li>
          <li> + Many challenges</li>
        </ul>

        <p>
          <strong>Prop drilling</strong> happends when a component down the component tree needs access to data in a grandparent (or higher) component, and that data is manually passed down to each
          child component until it finally reaches the component thaht needs it.
        </p>
        <a href="https://www.alura.com.br/artigos/prop-drilling-no-react-js">prop-drilling-no-react-js</a>

        {/* * 1. MenuDropdown should render children instead of items
         * 2. MenuItem (new component you need to create) should also
         *    render children. Grab the <div className="menu-item">
         *    from MenuDropdown before deleting it if you want to be
         *    lazy :)
         * 3. Map over the `sports` array inside MenuDropdown in this
         *    file and render a MenuItem for each sport in the array */}

        <MenuChallenge>
          <MenuButton className="button">Sports List</MenuButton>

          <MenuDropdown>
            {sports.map((sport) => (
              <MenuItem key={sport}>
                {/*    <a href="#">{sport}</a> */}
                {sport}
              </MenuItem>
            ))}
          </MenuDropdown>
        </MenuChallenge>
      </section>

      <footer></footer>
    </>
  )
}

export default App
