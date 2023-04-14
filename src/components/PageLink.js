const PageLink = ({ pageLink, linkClass }) => {
  const { href, text } = pageLink

  return (
    <li>
      <a href={href} className={linkClass}>
        {text}
      </a>
    </li>
  )
}

export default PageLink
