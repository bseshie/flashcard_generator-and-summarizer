import React from 'react';


const LinkArea = () => {
    return (
        <div class="container-fluid input-group link d-flex justify-content-center mt-5 mb-5">
            <input type="url"  className="form-control me-3 rounded-end" placeholder='Paste the article link'  />
            <button type='submit' className='linkBtn px-4 py-1 rounded'>Submit</button>
        </div>
    );
}

export default LinkArea;