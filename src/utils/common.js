// 公共方法，类似Jquery.param

const objectParam =  (obj) => {
	var s=[];
	for(var key in obj){
		s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( obj[key] );
	}
	return s.join( "&" ).replace( '/%20/g', "+" );
};

export default objectParam;
