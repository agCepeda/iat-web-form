import React, { Component } from 'react';

export const TestLayout = (props) => {
	return (
	  <div>
		  <div className={"container"}>
			  <div className="row justify-content-center">
				  <div className="col-7">
					  <div className="shadow-sm p-3 mb-5 bg-white rounded">
						  {props.children}
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
	)
}