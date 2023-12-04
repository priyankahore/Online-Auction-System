import React from 'react';

function AboutUs(props) {
    return (
        <div>
        <div>
        <div className="container p-5">
            <div className="row mt-2 ">
                <div className="col-sm-7 " >
                    <h1 className="heading pt-3 pb-3">Why Us ?</h1>
                    <div>
                        <p>
                        Welcome to Ebay, one of the best Indian online auction shopping venues on the Net!<br></br>
                        Ebay has introduced a completely new and funny way of online shopping. Why spending a fortune for a brand new product if you can get it with a huge discount? We give you the chance to get the products you dream about at amazing prices!
                        </p>

                        <h5>Our Values</h5>

                        Our main goal is giving fun to online shopping. We aim to achieve this objective through..
                        <ul className="p-2 m-2">
                            <li>An ethical bidding environment for our customers</li>
                            <li> Accurate product and pricing information</li>
                            <li>  Quick responses to customer inquiries and problems</li>
                            <li> Highest standards for our customer’s privacy</li>
                           <li> Dignity and respect among all the members of our team</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-5">

                    <img classsName="image-format" src="../images/caurosal1.jpeg" alt="" style={{ height: '32rem', width: '35rem', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} />
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default AboutUs;