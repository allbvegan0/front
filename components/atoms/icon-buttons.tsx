const IconButton = (props) => {
  const { link, children } = props;
  return (
    <>
      <a href={link}>{children}</a>
    </>
  );
};

export default IconButton;



export const KeyBoardOption = ()=>{
  // const {keybords} = keybords.avialable 
  // <IDBCursor/>

  return <><svg><line allowReorder="yes"/></svg><label>Start Here</label></>

}