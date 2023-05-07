import womanGlass from '../../assets/glass-woman.webp'
// import doubleGlass from '../../assets/double-glasses.svg'
import doubleGlass from '../../assets/double-glasses.webp'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'
function Welcome() {
  const navigate = useNavigate()
  return (
    <section className='welcome'>
      <div className='container welcome-container'>
        <div className='welcome-text'>
          <h1>
            <span style={{ '--i': '1s' }}>The</span> {''}
            <span style={{ '--i': '3.75s' }}>Visionary</span> {''}
            <span style={{ '--i': '2s' }}>Collection</span>
          </h1>
          <div className='welcome-second-text'>
            <img src={doubleGlass} alt='' style={{ '--i': '1s' }} />
            <div>
              <h2 style={{ '--i': '1.5s' }}>The Colanton</h2>
              <p style={{ '--i': '2s' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis optio, a quos ut minima libero consequatur
                exercitationem.
              </p>
              <button onClick={() => navigate('/product')} aria-label='explore'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='48'
                  height='48'
                  viewBox='0,0,256,256'
                  style={{ fill: '#000000' }}
                >
                  <g
                    fill='none'
                    fillRule='nonzero'
                    stroke='none'
                    strokeWidth='1'
                    strokeLinecap='butt'
                    strokeLinejoin='miter'
                    strokeMiterlimit='10'
                    strokeDasharray=''
                    strokeDashoffset='0'
                    fontFamily='none'
                    fontWeight='none'
                    fontSize='none'
                    textAnchor='none'
                    style={{ mixBlendMode: 'normal' }}
                  >
                    <g transform='scale(0.5,0.5)'>
                      <path
                        d='M73.087,380.941c0,-5.15 1.36,-10.44 4.33,-15.391l62.721,-104.55l-62.721,-104.55c-12.01,-20 2.4,-45.45 25.73,-45.45c5.27,0 10.35,1.38 14.79,3.9c4.43,2.51 8.229,6.149 10.95,10.67l81.25,135.43l-81.25,135.431c-5.431,9.04 -15.2,14.569 -25.74,14.569c-17.549,0.001 -30.06,-14.409 -30.06,-30.059z'
                        fill='#b6462f'
                        style={{ '--i': '0.1s' }}
                      ></path>
                      <path
                        d='M193.087,380.941c0,-5.15 1.36,-10.44 4.33,-15.391l62.721,-104.55l-62.721,-104.55c-12.01,-20 2.4,-45.45 25.73,-45.45c5.27,0 10.35,1.38 14.79,3.9c4.43,2.51 8.229,6.149 10.95,10.67l81.25,135.43l-81.25,135.431c-5.431,9.04 -15.2,14.569 -25.74,14.569c-17.549,0.001 -30.06,-14.409 -30.06,-30.059z'
                        fill='#fe8b6f'
                        style={{ '--i': '0.3s' }}
                      ></path>
                      <path
                        d='M313.087,380.941c0,-5.15 1.36,-10.44 4.33,-15.391l62.721,-104.55l-62.721,-104.55c-12.01,-20 2.4,-45.45 25.73,-45.45c5.27,0 10.35,1.38 14.79,3.9c4.43,2.51 8.229,6.149 10.95,10.67l81.25,135.43l-81.25,135.431c-5.431,9.04 -15.2,14.569 -25.74,14.569c-17.549,0.001 -30.06,-14.409 -30.06,-30.059z'
                        fill='#b6462f'
                        style={{ '--i': '0.5s' }}
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='welcome-image'>
          <img src={womanGlass} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Welcome
