import React from 'react'


const links = [
  { name: 'github', link: 'https://github.com/mattbag' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/matteobagni88/' },
  { name: 'twitter', link: 'https://mobile.twitter.com/mattbag00' },
  { name: 'codepen', link: 'https://codepen.io/mattbag/' },
]

export default () => (
  <div
    id="channels"
  >
    <ul
      style={{
        backgroundColor: 'var(--black)',
        margin: 0,
        padding:0,
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: 'var(--h-size, 2rem)',
        justifyContent: 'space-around',
      }}
    >
      {links.map(s => (
        <li
          key={s.name}
          style={{
            margin: 2,
            padding: 2,
          }}
        >
          <a
          target="_blank"
          rel="noopener noreferrer"
            href={s.link}
className="text-white"
          >
            {s.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

