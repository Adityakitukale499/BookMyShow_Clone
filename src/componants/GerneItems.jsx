import Offcanvas from 'react-bootstrap/Offcanvas';

function GerneItems({ gerne, show, setShow, setGerneid }) {

  return (
    <>


      <Offcanvas show={show} onHide={() => setShow(false)} placement='end' style={{ width: '300px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Gerne List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {gerne.map((ele, i) => (
            <h3 className='gerneItem' key={i}><a onClick={() => setGerneid(ele.id)} className="dropdown-item" href="#">{ele.name}</a></h3>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default GerneItems;