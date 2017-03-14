

export default {
		setHeadNav: (state, index)=> {
	      state.headTab = 'head-tab' + index;
	    },
	    showHeadNav: (state, flag) =>{
	      state.head.isDetail = flag;
	    },
	    setMainClass:(state,flag) =>{
	    	state.head.mainClass = flag;
	    }
	};