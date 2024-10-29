const layoutClassName = `border-[1px] border-solid border-gray-500 px-[32px] py-[32px] rounded-[6px] w-[50%] m-auto`

const Layout = ({ children }) => {
  return (
    <div className={layoutClassName}>
        {children}
    </div>
  )
}

export default Layout
