import React from 'react'
import { Button, Card } from 'react-bootstrap'
import product3Img from '../../assets/images/product3-img.jpeg';
function Products() {
  return (
    <section className="featured__products py-5">
        <header className="featured__products__header text-center">
            <h2 className='text-capitalize fw-bolder fs-1'>featured products</h2>
            <p className='text-muted fs-5'>Best product and best quality</p>
        </header>
        <div className="featured__products__content mt-5">
            <div className="row justify-content-evenly">
                <Card className='col-md-3 py-3'>
                    <Card.Img variant="top" src={product3Img} className="w-100"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className='col-md-3 py-3'>
                    <Card.Img variant="top" src={product3Img} className="w-100"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className='col-md-3 py-3'>
                    <Card.Img variant="top" src={product3Img} className="w-100"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default Products