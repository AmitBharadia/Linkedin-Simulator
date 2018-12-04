// import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf/dist/entry.webpack';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import axios from "axios";
// import * as CONST from "../../Const";
//
// export default class GetApplications3 extends Component {
//     state = {
//         file: '',
//         numPages: null
//
//     }
//
//
//     onDocumentLoadSuccess = ({ numPages }) => {
//         this.setState({ numPages });
//     }
//
//     render() {
//         const { file, numPages } = this.state;
//
//         return (
//             <div className="Example">
//                 <header>
//                     <h1>react-pdf sample page</h1>
//                 </header>
//                 <div className="Example__container">
//
//                     <div className="Example__container__document">
//                         <Document
//                             file="https://s3.amazonaws.com/linkedin-273/CompanyLogo/AWS+Account+Creation.pdf"
//                             onLoadSuccess={this.onDocumentLoadSuccess}
//                         >
//                             {
//                                 Array.from(
//                                     new Array(numPages),
//                                     (el, index) => (
//                                         <Page
//                                             key={`page_${index + 1}`}
//                                             pageNumber={index + 1}
//                                         />
//                                     ),
//                                 )
//                             }
//                         </Document>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

export default class GetApplications3 extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file="https://s3.amazonaws.com/linkedin-273/CompanyLogo/AWS+Account+Creation.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}