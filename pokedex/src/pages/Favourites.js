import React from 'react'


const mapStateToProps = (state) => ({
    favourites: state.favourites,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Favourites)
  );

function Favourites() {
  return (
    <div>Favourites</div>
  )
}

export default Favourites