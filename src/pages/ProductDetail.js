// React-Router-DOM-Dynamic-Link

import React from 'react';

// React-Router-DOM-Dynamic-Link
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    // React-Router-DOM-Dynamic-Link
    const params = useParams();

    return (
        <section>
            <h1>Product Detail</h1>

            {/* React-Router-DOM-Dynamic-Link */}
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductDetail;