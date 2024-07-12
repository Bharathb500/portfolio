function Image({imgSrc, imgAlt, cname}) {
  return (
    <img className={cname} src={imgSrc} alt={imgAlt} />
  )
}

export default Image