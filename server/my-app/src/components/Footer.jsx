const Footer = ()=>{
    const currentYear =new Date().toDateString()
    const currenttYear =new Date().toISOString()
    return <p>Footer {currentYear}  {'\n'}  {currenttYear}</p>
}

export default Footer