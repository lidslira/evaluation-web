const size = {
  mobile: '480px',
  smallTablet: '640px',
  tablet: '768px',
  smallLaptop: '1024px',
  laptop: '1280px',
  bigLaptop: '1500px',
  desktop: '1920px'
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  smallTablet: `(max-width: ${size.smallTablet})`,
  tablet: `(max-width: ${size.tablet})`,
  smallLaptop: `(max-width: ${size.smallLaptop})`,
  laptop: `(max-width: ${size.laptop})`,
  bigLaptop: `(max-width: ${size.bigLaptop})`,
  desktop: `(max-width: ${size.desktop})`
}