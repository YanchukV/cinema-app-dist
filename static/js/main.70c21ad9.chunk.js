(this["webpackJsonpcinema-app"]=this["webpackJsonpcinema-app"]||[]).push([[0],{119:function(e,t,a){e.exports={container:"styles_container__7z-kL",title:"styles_title__TIjup",row:"styles_row__2F74D"}},120:function(e,t,a){e.exports={slider:"styles_slider__2wczH",row:"styles_row__3ragE"}},219:function(e,t,a){e.exports={tableRow:"latestFilms_tableRow__3ueOy"}},220:function(e,t,a){e.exports={tableRow:"topRatedFilms_tableRow__1UgRC"}},226:function(e,t,a){e.exports=a(431)},431:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),l=a.n(c),i=(a(231),a(442)),o=a(5),s=a(223),u=a(38),m=a(11),f=Object.freeze({RECOMMENDED_FILL:"RECOMMENDED_FILL",RECOMMENDED_FETCH_ASYNC:"RECOMMENDED_FETCH_ASYNC"}),E={data:[]},d=Object.freeze({EXAMPLE_FILL:"EXAMPLE_FILL",EXAMPLE_FETCH_ASYNC:"EXAMPLE_FETCH_ASYNC"}),p={data:[]},_=Object.freeze({TRENDING_FILL:"TRENDING_FILL",TRENDING_FETCH_ASYNC:"TRENDING_FETCH_ASYNC"}),v={movies:null},g=Object.freeze({FILM_FILL:"FILM_FILL",FILM_FETCH_ASYNC:"FILM_FETCH_ASYNC"}),h={data:[]},F=Object.freeze({COMMENTS_FILL:"COMMENTS_FILL",COMMENTS_START_FETCHING:"COMMENTS_START_FETCHING",COMMENTS_STOP_FETCHING:"COMMENTS_STOP_FETCHING",COMMENTS_SET_FETCHING_ERROR:"COMMENTS_SET_FETCHING_ERROR",COMMENTS_FETCH_ASYNC:"COMMENTS_FETCH_ASYNC"}),I={data:[],isFetching:!1,error:!1},b=Object.freeze({UI_START_FETCHING:"UI_START_FETCHING",UI_STOP_FETCHING:"UI_STOP_FETCHING",UI_SET_FETCHING_ERROR:"UI_SET_FETCHING_ERROR"}),O=Object.freeze({startFetching:function(){return{type:b.UI_START_FETCHING}},stopFetching:function(){return{type:b.UI_STOP_FETCHING}},setFetchingError:function(e){return{type:b.UI_SET_FETCHING_ERROR,error:!0,payload:e}}}),y={isFetching:!1,error:!1},T=Object.freeze({LATEST_FILMS_FILL:"LATEST_FILMS_FILL",LATEST_FILMS_FETCH_ASYNC:"LATEST_FILMS_FETCH_ASYNC"}),S={data:[],isDataReady:!1},L=Object.freeze({TOP_RATED_FILMS_FILL:"TOP_RATED_FILMS_FILL",GENRE_FILL:"GENRE_FILL",TOP_RATED_FILMS_FETCH_ASYNC:"TOP_RATED_FILMS_FETCH_ASYNC"}),N={data:[],genres:[]},M=Object.freeze({SIMILAR_MOVIES_FILL:"SIMILAR_MOVIES_FILL",SIMILAR_MOVIES_START_FETCHING:"SIMILAR_MOVIES_START_FETCHING",SIMILAR_MOVIES_STOP_FETCHING:"SIMILAR_MOVIES_STOP_FETCHING",SIMILAR_MOVIES_SET_ERROR:"SIMILAR_MOVIES_SET_ERROR",SIMILAR_MOVIES_ASYNC:"SIMILAR_MOVIES_ASYNC"}),R={data:[],isFetching:!1,error:!1},C=Object(u.c)({example:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case d.EXAMPLE_FILL:return Object(m.a)({},e,{data:r});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;t.meta;switch(a){case b.UI_START_FETCHING:return Object(m.a)({},e,{isFetching:!0});case b.UI_STOP_FETCHING:return Object(m.a)({},e,{isFetching:!1});case b.UI_SET_FETCHING_ERROR:return Object(m.a)({},e,{error:r});default:return e}},trending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case _.TRENDING_FILL:return Object(m.a)({},e,{data:r});default:return e}},film:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case g.FILM_FILL:return Object(m.a)({},e,{data:r});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case F.COMMENTS_FILL:return Object(m.a)({},e,{data:r});case F.UI_START_FETCHING:return Object(m.a)({},e,{isFetching:!0});case F.UI_STOP_FETCHING:return Object(m.a)({},e,{isFetching:!1});case F.UI_SET_FETCHING_ERROR:return Object(m.a)({},e,{error:r});default:return e}},latestFilms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case T.LATEST_FILMS_FILL:return Object(m.a)({},e,{data:r,isDataReady:!0});default:return e}},topMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case L.TOP_RATED_FILMS_FILL:return Object(m.a)({},e,{data:r});case L.GENRE_FILL:return Object(m.a)({},e,{genres:r});default:return e}},similarMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.SIMILAR_MOVIES_FILL:return Object(m.a)({},e,{data:t.payload});case M.SIMILAR_MOVIES_START_FETCHING:return Object(m.a)({},e,{isFetching:!0});case M.SIMILAR_MOVIES_STOP_FETCHING:return Object(m.a)({},e,{isFetching:!1});case M.SIMILAR_MOVIES_SET_ERROR:return Object(m.a)({},e,{error:t.payload});default:return e}},recommended:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case f.RECOMMENDED_FILL:return Object(m.a)({},e,{data:r});default:return e}}}),j=a(187),A=a(188),k=(Object(j.createLogger)({duration:!0,collapsed:!0,colors:{title:function(e){return e.error?"firebrick":"deepskyblue"},prevState:function(){return"#1C5FAF"},action:function(){return"#149945"},nextState:function(){return"#A47104"},error:function(){return"#ff0005"}}}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,u.d),w=[A.a];var x=Object(u.e)(C,k(u.a.apply(void 0,Object(s.a)(w)))),H=a(36),P=Object(H.a)(),z=Object.freeze({root:"/",news:"/news",popularFilms:"/popular-films",film:"/films/:id",films:"/films",topRatedFilms:"/top-rated-films",latestFilms:"/latest-films",example:"/example"}),G=a(436),D="https://api.themoviedb.org/3",Y="0f54f9b86228f937f00654afd198583a",U="https://image.tmdb.org/t/p/w500",V=a(10),X=a.n(V),B=a(17),J=a(15),$=a.n(J),Q=Object.freeze({upcomingMovies:{fetch:function(){return $.a.get("".concat(D,"/movie/upcoming"),{params:{api_key:Y,language:"ru-Ru"}})}}}),W=Object.freeze({fill:function(e){return{type:d.EXAMPLE_FILL,payload:e}},fetchAsync:function(){return function(){var e=Object(B.a)(X.a.mark((function e(t){var a,r,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:d.EXAMPLE_FETCH_ASYNC}),t(O.startFetching()),e.prev=2,e.next=5,Q.upcomingMovies.fetch();case 5:200===(a=e.sent).status?(r=a.data.results,t(W.fill(r))):(console.log(a),n={status:a.status},t(O.setFetchingError(n))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(O.setFetchingError({status:401,message:"Not authorized. Provide correct token please"}));case 12:t(O.stopFetching());case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}}),q=function(){var e=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e(W.fetchAsync())}),[e]);var t=Object(o.c)((function(e){return e.example})).data,a=Object(o.c)((function(e){return e.ui}));return{data:t,isFetching:a.isFetching,error:a.error}}(),t=e.isFetching,a=e.data,c=e.error,l=401===c.status&&n.a.createElement("p",null,c.message),i=404===c.status&&n.a.createElement("p",null,"Not found!"),s=t&&n.a.createElement("p",null,"Loading data from API..."),u=a&&a.map((function(e){var t=e.id,a=e.title,r=e.overview,n=e.poster_path;return{title:a,overview:r,key:t,poster:"".concat(U).concat(n)}})),m=[{title:"\u041f\u043e\u0441\u0442\u0435\u0440",dataIndex:"poster",key:"poster",render:function(e){return n.a.createElement("img",{src:e,alt:"poster",width:100})}},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"title",key:"title"},{title:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:"overview",key:"overview"}],f=!t&&a.length>0&&n.a.createElement(G.a,{dataSource:u,columns:m});return n.a.createElement(n.a.Fragment,null,l,i,s,f)},K=function(){return n.a.createElement(q,null)},Z=a(79),ee=a(433),te=Object.freeze({EXAMPLE_FILL:"EXAMPLE_FILL",EXAMPLE_FETCH_ASYNC:"EXAMPLE_FETCH_ASYNC"}),ae=Object.freeze({upcomingMovies:{fetch:function(){return $.a.get("".concat(D,"/movie/popular"),{params:{api_key:Y,language:"ru-Ru"}})}}}),re=Object.freeze({fill:function(e){return{type:te.EXAMPLE_FILL,payload:e}},fetchAsync:function(){return function(){var e=Object(B.a)(X.a.mark((function e(t){var a,r,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:te.EXAMPLE_FETCH_ASYNC}),t(O.startFetching()),e.prev=2,e.next=5,ae.upcomingMovies.fetch();case 5:200===(a=e.sent).status?(r=a.data.results,t(re.fill(r))):(console.log(a),n={status:a.status},t(O.setFetchingError(n))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(O.setFetchingError({status:401,message:"Not authorized. Provide correct token please"}));case 12:t(O.stopFetching());case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}}),ne=a(92),ce=a.n(ne),le=[{title:"\u041f\u043e\u0441\u0442\u0435\u0440",dataIndex:"poster",key:"poster",render:function(e){return n.a.createElement("img",{src:e,alt:"poster",width:100})}},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"title",key:"title"},{title:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:"overview",key:"overview"},{title:"\u0418\u043d\u0434\u0435\u043a\u0441 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",dataIndex:"popularity",key:"popularity"},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0432\u0448\u0438\u0445 \u043b\u044e\u0434\u0435\u0439",dataIndex:"vote_count",key:"vote_count"},{title:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043e\u0446\u0435\u043d\u043a\u0430",dataIndex:"vote_average",key:"vote_average",defaultSortOrder:"descend",sorter:function(e,t){return e.vote_average-t.vote_average}}],ie=function(e){return P.push("".concat(z.films,"/").concat(e))},oe="https://image.flaticon.com/icons/svg/2345/2345614.svg",se=function(){var e=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e(re.fetchAsync())}),[e]);var t=Object(o.c)((function(e){return e.example})).data,a=Object(o.c)((function(e){return e.ui}));return{data:t,isFetching:a.isFetching,error:a.error}}(),t=e.isFetching,a=e.data,c=e.error,l=401===c.status&&n.a.createElement(Z.a,{className:ce.a.container,image:oe,description:n.a.createElement("span",null,c.message)}),i=404===c.status&&n.a.createElement(Z.a,{className:ce.a.container,image:oe,description:n.a.createElement("span",null,"Not found!")}),s=t&&n.a.createElement(Z.a,{image:Z.a.PRESENTED_IMAGE_SIMPLE,description:n.a.createElement("span",null,"Loading data from API...")}),u=a&&a.map((function(e){var t=e.id,a=e.title,r=e.popularity,n=e.vote_count,c=e.overview,l=e.vote_average,i=e.poster_path;return{title:a,popularity:r,overview:c,vote_count:n,vote_average:l,key:t,poster:"".concat(U).concat(i)}})),m=!t&&a.length>0&&n.a.createElement(G.a,{rowClassName:ce.a.tableRow,dataSource:u,columns:le,onRow:function(e,t){return{onClick:function(){return ie(e.key)}}}});return n.a.createElement(n.a.Fragment,null,n.a.createElement(ee.a,null,n.a.createElement(ee.a.Content,{className:ce.a.container},l,i,s,m)))},ue=function(){return n.a.createElement(se,null)},me=a(61),fe=a(147),Ee=a(224),de=a(443),pe=a(1),_e=a.n(pe),ve=a(78),ge=a.n(ve),he=function(e){var t=e.onClick,a=void 0===t?function(){}:t,r=Object(Ee.a)(e,["onClick"]),c=r.id,l=r.title,i=r.overview,o=r.poster,s=r.releaseYear,u=r.rating;return n.a.createElement("div",{className:ge.a.card},n.a.createElement(de.a,{hoverable:!0,style:{width:"100%"},cover:n.a.createElement("img",{alt:l,src:o}),onClick:function(){return a({id:c})}},n.a.createElement("div",{className:_e()(ge.a.label,ge.a["label--left"])},s),n.a.createElement("div",{className:_e()(ge.a.label,ge.a["label--right"])},u),n.a.createElement(de.a.Meta,{title:l,description:i})))},Fe=a(119),Ie=a.n(Fe),be=Object.freeze({trendingFilms:{fetch:function(e){return $.a.get("".concat(D,"/trending/movie/").concat(e),{params:{api_key:Y,language:"ru-Ru"}})}}}),Oe=Object.freeze({fill:function(e){return{type:_.TRENDING_FILL,payload:e}},fetchAsync:function(e){return function(){var t=Object(B.a)(X.a.mark((function t(a){var r,n,c,l;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:_.TRENDING_FETCH_ASYNC}),a(O.startFetching()),t.prev=2,t.next=5,be.trendingFilms.fetch(e);case 5:if(200!==(r=t.sent).status){t.next=14;break}return t.next=9,r.data;case 9:n=t.sent,c=n.results,a(Oe.fill(c)),t.next=16;break;case 14:l={status:r.status},a(O.setFetchingError(l));case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),a(O.setFetchingError({status:401,message:"Not authorized. Provide correct token please"}));case 21:a(O.stopFetching());case 22:case"end":return t.stop()}}),t,null,[[2,18]])})));return function(e){return t.apply(this,arguments)}}()}}),ye=function(){var e=Object(r.useState)("1"),t=Object(me.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)("day"),i=Object(me.a)(l,2),s=i[0],u=i[1],m=function(e){var t=Object(o.b)();Object(r.useEffect)((function(){t(Oe.fetchAsync(e))}),[t,e]);var a=Object(o.c)((function(e){return e.trending.data})),n=Object(o.c)((function(e){return e.ui}));return{data:a,isFetching:n.isFetching,error:n.error}}(s),f=m.data,E=m.isFetching,d=m.error,p=401===d.status&&n.a.createElement("p",null,d.message),_=404===d.status&&n.a.createElement("p",null,"Not found!"),v=p||_,g=E&&n.a.createElement("p",null,"Loading..."),h=f&&f.map((function(e){return n.a.createElement(he,Object.assign({key:e.id},{id:(t=e).id,title:t.title,rating:t.vote_average,overview:t.overview,poster:U+t.poster_path,releaseYear:new Date(t.release_date).getFullYear()},{onClick:function(e){var t=e.id;return ie(t)}}));var t})),F=[{id:"1",title:"\u0417\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f",content:E?g:h,param:"day"},{id:"2",title:"\u0417\u0430 \u043d\u0435\u0434\u0435\u043b\u044e",content:E?g:h,param:"week"}];return n.a.createElement("div",{className:Ie.a.container},n.a.createElement("div",{className:Ie.a.title},"\u0422\u0440\u0435\u043d\u0434\u043e\u0432\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"),v?p||_:n.a.createElement(fe.a,{onChange:function(e){var t=F.filter((function(t){return t.id===e}))[0];c(e),u(t.param)},activeId:a},F.map((function(e){return n.a.createElement(fe.a.TabPane,{tab:e.title,key:e.id,closable:!1},n.a.createElement("div",{className:Ie.a.row},e.content))}))))},Te=function(){return n.a.createElement(ye,null)},Se=a(205),Le=a(444),Ne=a(441),Me=a(80),Re=a(30),Ce=a(440),je=Object.freeze({getMovie:{fetch:function(e){return $.a.get("".concat(D,"/movie/").concat(e),{params:{api_key:Y,language:"ru-Ru"}})}}}),Ae=Object.freeze({fill:function(e){return{type:g.FILM_FILL,payload:e}},fetchAsync:function(e){return function(){var t=Object(B.a)(X.a.mark((function t(a){var r,n,c;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:g.FILM_FETCH_ASYNC}),a(O.startFetching()),t.prev=2,t.next=5,je.getMovie.fetch(e);case 5:200===(r=t.sent).status?(n=r.data,a(Ae.fill(n))):(c={status:r.status},a(O.setFetchingError(c))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a(O.setFetchingError({status:401,message:"Not authorized. Provide correct token please"}));case 12:a(O.stopFetching());case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}}),ke=a(434),we=a(438),xe=Object.freeze({getComments:{fetch:function(e){return $.a.get("".concat(D,"/movie/").concat(e,"/reviews"),{params:{api_key:Y,language:"en-US"}})}}}),He=Object.freeze({startFetching:function(){return{type:F.COMMENTS_START_FETCHING}},stopFetching:function(){return{type:F.COMMENTS_STOP_FETCHING}},setFetchingError:function(e){return{type:F.COMMENTS_SET_FETCHING_ERROR,error:!0,payload:e}},fill:function(e){return{type:F.COMMENTS_FILL,payload:e}},fetchAsync:function(e){return function(){var t=Object(B.a)(X.a.mark((function t(a){var r,n,c;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:F.COMMENTS_FETCH_ASYNC}),a(He.startFetching()),t.prev=2,t.next=5,xe.getComments.fetch(e);case 5:200===(r=t.sent).status?(n=r.data,a(He.fill(n))):(c={status:r.status},a(He.setFetchingError(c))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a(He.setFetchingError({status:401,message:"Not authorized. Provide correct token please"}));case 12:a(He.stopFetching());case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}}),Pe=function(){var e=ee.a.Content,t=function(e){var t=Object(o.b)();Object(r.useEffect)((function(){t(He.fetchAsync(e))}),[t,e]);var a=Object(o.c)((function(e){return e.comments})),n=a.isFetching,c=a.error;return{data:a.data,isFetching:n,error:c}}(Object(i.e)().id),a=t.isFetching,c=t.data,l=t.error,s=401===l.status&&n.a.createElement("p",null,l.message),u=404===l.status&&n.a.createElement("p",null,"Not found!"),m=a&&n.a.createElement(Se.a,null),f=c.results,E=f&&f.map((function(e){var t=e.id,a=e.author,r=e.content;return n.a.createElement(ke.a,{author:a,key:t,avatar:n.a.createElement(we.a,{style:{fontSize:"25px"}}),content:r})})),d=!a&&f&&f.length>0&&n.a.createElement(e,{style:{padding:"0 50px"}},E);return n.a.createElement(n.a.Fragment,null,s,u,m,d)},ze=a(437),Ge=a(52),De=a.n(Ge),Ye=function(e){var t=e.title,a=e.overview,r=e.poster,c=e.releaseYear,l=e.rating,i=_e()(De.a.label,De.a["label--left"]),o=_e()(De.a.label,De.a["label--right"]);return n.a.createElement("div",{className:De.a.movieTile},n.a.createElement(de.a,{hoverable:!0,className:De.a.card,cover:n.a.createElement("div",{className:De.a.image},n.a.createElement("img",{alt:t,src:r}))},n.a.createElement("div",{className:i},c),n.a.createElement("div",{className:o},l),n.a.createElement(de.a.Meta,{title:t,description:a})))},Ue=a(435),Ve=a(120),Xe=a.n(Ve),Be=a(209),Je=function(e){var t=e.movies,a=function e(t){var a=Object(Be.a)(t),r=a[0],n=a[1],c=a[2],l=a[3],i=a.slice(4);return 0===i.length?[[r,n,c,l].filter((function(e){return void 0!==e}))]:[[r,n,c,l]].concat(e(i))}(t),r=function(e){var t=e.items;return n.a.createElement("div",{className:Xe.a.slideItem},n.a.createElement(Me.a,{gutter:[16,16],className:Xe.a.row},t.length&&t.map((function(e){return n.a.createElement(Re.a,{span:6,key:e.id},n.a.createElement(Ye,function(e){var t=e&&e.overview,a=t?"".concat(t.substring(0,150),"..."):"";return{id:e.id,title:e.title,rating:e.vote_average,overview:a,poster:U+e.poster_path,releaseYear:new Date(e.release_date).getFullYear()}}(e)))}))))},c=t.length&&a.map((function(e,t){return n.a.createElement(r,{key:t,items:e})}));return n.a.createElement("div",{className:Xe.a.slider},n.a.createElement(Ue.a,{autoplay:!0},c))},$e=a(90),Qe=a.n($e),We=Object.freeze({getSimilarMovies:{fetch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return $.a.get("".concat(D,"/movie/").concat(e,"/similar"),{params:{api_key:Y,language:"en-US",page:t}})}}}),qe=Object.freeze({startFetching:function(){return{type:M.SIMILAR_MOVIES_START_FETCHING}},stopFetching:function(){return{type:M.SIMILAR_MOVIES_STOP_FETCHING}},setError:function(e){return{type:M.SIMILAR_MOVIES_SET_ERROR,error:!0,payload:e}},fillMovies:function(e){return{type:M.SIMILAR_MOVIES_FILL,payload:e}},fetchAsync:function(e){return function(){var t=Object(B.a)(X.a.mark((function t(a){var r,n,c,l;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:M.SIMILAR_MOVIES_ASYNC}),a(qe.startFetching()),t.next=5,We.getSimilarMovies.fetch(e);case 5:if(r=t.sent,n=r.data,200===(c=r.status)){t.next=10;break}return l={status:c},t.abrupt("return",a(qe.setFetchingError(l)));case 10:a(qe.fillMovies(n.results)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a(qe.setError({status:401,message:"Not authorized. Provide correct token please"}));case 16:return t.prev=16,a(qe.stopFetching()),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})));return function(e){return t.apply(this,arguments)}}()}}),Ke=function(e){var t=function(e){var t=Object(o.b)();Object(r.useEffect)((function(){t(qe.fetchAsync(e))}),[t,e]);var a=Object(o.c)((function(e){return e.similarMovies})),n=a.isFetching,c=a.error;return{data:a.data,isFetching:n,error:c}}(e.movieId),a=t.isFetching,c=t.data,l=t.error,i=401===l.status&&n.a.createElement("p",null,l.message),s=404===l.status&&n.a.createElement("p",null,"Not found!"),u=a&&n.a.createElement(Se.a,null),m=!a&&!!c.length&&n.a.createElement(Me.a,{gutter:16},n.a.createElement(Re.a,null,n.a.createElement(ze.a.Title,{level:3,strong:!0,className:Qe.a.title},"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"),n.a.createElement(Je,{movies:c})));return n.a.createElement("section",{className:Qe.a.similarFilms},i,s,u,m)},Ze=a(439),et=Object.freeze({recommended:{fetch:function(e){return $.a.get("".concat(D,"/movie/").concat(e,"/recommendations"),{params:{api_key:Y,language:"ru-Ru"}})}}}),tt=Object.freeze({fill:function(e){return{type:f.RECOMMENDED_FILL,payload:e}},fetchAsync:function(e){return function(){var t=Object(B.a)(X.a.mark((function t(a){var r,n;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:f.RECOMMENDED_FETCH_ASYNC}),t.prev=1,t.next=4,et.recommended.fetch(e);case 4:200===(r=t.sent).status?(n=r.data.results,a(tt.fill(n))):(console.log(r),{status:r.status}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(O.setFetchingError({status:401,message:"Not authorized. Provide correct token please"}));case 11:a(O.stopFetching());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}}),at=a(93),rt=a.n(at),nt=function(){var e=function(e){var t=Object(o.b)();Object(r.useEffect)((function(){t(tt.fetchAsync(e))}),[t,e]);var a=Object(o.c)((function(e){return e.recommended})).data,n=Object(o.c)((function(e){return e.ui}));return{data:a,isFetching:n.isFetching,error:n.error}}(Object(i.e)().id),t=e.isFetching,a=e.data,c=e.error,l=401===c.status&&n.a.createElement("p",null,c.message),s=404===c.status&&n.a.createElement("p",null,"Not found!"),u=t&&n.a.createElement("p",null,"Loading data from API..."),m=!t&&a.length&&a.map((function(e,t){var a=e.id,r=e.title,c=e.poster_path,l=e.vote_average,i=e.release_date,o=e.overview.substr(0,70)+"...";return n.a.createElement(Re.a,{span:6,key:a},n.a.createElement("div",{className:rt.a["poster-item"]},n.a.createElement("img",{src:"".concat(U).concat(c),alt:r}),n.a.createElement("div",{className:rt.a.rate,title:l},n.a.createElement(Ze.a,{count:10,style:{fontSize:12},disabled:!0,allowHalf:!0,defaultValue:l}))),n.a.createElement("h2",null,r),n.a.createElement("time",null,i),n.a.createElement("p",null,o))}));return n.a.createElement(n.a.Fragment,null,l,s,u,n.a.createElement("div",{className:rt.a.recommended},n.a.createElement(ze.a.Title,{level:3,strong:!0,className:Qe.a.title},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"),n.a.createElement(Ue.a,{dots:!0,className:rt.a.dots},function(){for(var e=[];m.length;)e.push(n.a.createElement("div",{key:Math.random()},n.a.createElement(Me.a,{gutter:16},m.splice(0,4))));return e}())))},ct=function(){var e=ee.a.Content,t=Object(i.e)().id,a=function(e){var t=Object(o.b)();Object(r.useEffect)((function(){t(Ae.fetchAsync(e))}),[t,e]);var a=Object(o.c)((function(e){return e.film})).data,n=Object(o.c)((function(e){return e.ui}));return{data:a,isFetching:n.isFetching,error:n.error}}(t),c=a.isFetching,l=a.data,s=a.error,u=401===s.status&&n.a.createElement("p",null,s.message),m=404===s.status&&n.a.createElement("p",null,"Not found!"),f=c&&n.a.createElement(Se.a,null),E=l.title,d=l.overview,p=l.backdrop_path,_=l.release_date,v=l.status,g=l.vote_count,h=l.vote_average,F=l.genres,I=l.popularity,b=l.budget,O=l.revenue,y=p&&U+p,T=F&&F.map((function(e){return n.a.createElement(Le.a,{color:"#0d1eec",style:{marginBottom:5},key:e.id},e.name)})),S=!c&&(null!==l)>0&&n.a.createElement(e,{style:{padding:"0 50px"}},n.a.createElement("div",{className:"site-layout-content",style:{marginBottom:"20px"}},n.a.createElement(Ne.a,{title:"\u041e \u0444\u0438\u043b\u044c\u043c\u0435",layout:"vertical",bordered:!0},n.a.createElement(Ne.a.Item,{label:"\u041f\u043e\u0441\u0442\u0435\u0440"},n.a.createElement("img",{src:y,alt:U+p})),n.a.createElement(Ne.a.Item,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},E),n.a.createElement(Ne.a.Item,{label:"\u0414\u0430\u0442\u0430 \u0440\u0435\u043b\u0438\u0437\u0430"},_),n.a.createElement(Ne.a.Item,{label:"\u0421\u0442\u0430\u0442\u0443\u0441"},v),n.a.createElement(Ne.a.Item,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0432\u0448\u0438\u0445 \u043b\u044e\u0434\u0435\u0439"},g),n.a.createElement(Ne.a.Item,{label:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043e\u0446\u0435\u043d\u043a\u0430"},h),n.a.createElement(Ne.a.Item,{label:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},d),n.a.createElement(Ne.a.Item,{label:"\u0416\u0430\u043d\u0440\u044b \u043f\u043e\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0444\u0438\u043b\u044c\u043c"},T))),n.a.createElement(Me.a,{gutter:16},n.a.createElement(Re.a,{span:8},n.a.createElement(de.a,null,n.a.createElement(Ce.a,{title:"\u0411\u044e\u0434\u0436\u0435\u0442",value:b,valueStyle:{color:"#0d1eec"},prefix:"$"}))),n.a.createElement(Re.a,{span:8},n.a.createElement(de.a,null,n.a.createElement(Ce.a,{title:"\u0414\u043e\u0445\u043e\u0434\u043d\u043e\u0441\u0442\u044c",value:O,valueStyle:{color:"#0d1eec"},prefix:"$"}))),n.a.createElement(Re.a,{span:8},n.a.createElement(de.a,null,n.a.createElement(Ce.a,{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c",value:I,precision:3,valueStyle:{color:"#0d1eec"}})))),n.a.createElement(nt,null),n.a.createElement(Pe,null),n.a.createElement(Ke,{movieId:t}),";");return n.a.createElement(n.a.Fragment,null,u,m,f,S)},lt=function(){return n.a.createElement(ct,null)},it=Object.freeze({latestFilms:{fetch:function(){return $.a.get("".concat(D,"/movie/latest"),{params:{api_key:Y,language:"ru-Ru"}})}}}),ot=Object.freeze({fill:function(e){return{type:T.LATEST_FILMS_FILL,payload:e}},fetchAsync:function(){return function(){var e=Object(B.a)(X.a.mark((function e(t){var a,r,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:T.LATEST_FILMS_FILL}),t(O.startFetching()),e.prev=2,e.next=5,it.latestFilms.fetch();case 5:200===(a=e.sent).status?(r=a.data,t(ot.fill(r))):(n={status:a.status},t(O.setFetchingError(n))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(O.setFetchingError({status:401,message:"Not authorized. Provide correct token please"}));case 12:t(O.stopFetching());case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}}),st=a(219),ut=a.n(st),mt=[{title:"\u041f\u043e\u0441\u0442\u0435\u0440",dataIndex:"poster",key:"poster",render:function(e){return function(e){return-1===e.split("/").pop().indexOf("null")?n.a.createElement("img",{src:e,alt:"poster",width:100}):"There is no image for this movie"}(e)}},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"title",key:"title"},{title:"\u0414\u0430\u0442\u0430 \u0440\u0435\u043b\u0438\u0437\u0430",dataIndex:"release_date",key:"release_date"},{title:"\u0414\u043e\u0445\u043e\u0434\u043d\u043e\u0441\u0442\u044c",dataIndex:"revenue",key:"revenue"},{title:"\u0421\u0442\u0430\u0442\u0443\u0441",dataIndex:"status",key:"status"},{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c",dataIndex:"popularity",key:"popularity"},{title:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:"overview",key:"overview"}],ft=function(){var e=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e(ot.fetchAsync())}),[e]);var t=Object(o.c)((function(e){return e.latestFilms})),a=t.data,n=t.isDataReady,c=Object(o.c)((function(e){return e.ui}));return{data:a,isDataReady:n,isFetching:c.isFetching,error:c.error}}(),t=e.data,a=e.isDataReady,c=e.isFetching,l=e.error;return{errorAuth:401===l.status&&n.a.createElement("p",null,l.message),errorMessage:404===l.status&&n.a.createElement("p",null,"Not found!"),moviesJSX:n.a.createElement(G.a,{rowClassName:ut.a.tableRow,dataSource:function(){if(!c&&a)return[{key:t.id,poster:"".concat(U).concat(t.poster_path),title:t.title,release_date:t.release_date,revenue:t.revenue,status:t.status,popularity:t.popularity,overview:t.overview}]}(),columns:mt,loading:c,onRow:function(e,t){return{onClick:function(){return ie(e.key)}}}})}},Et=function(){var e=ft(),t=e.errorAuth,a=e.errorMessage,r=e.moviesJSX;return n.a.createElement(n.a.Fragment,null,t,a,r)},dt=function(){return n.a.createElement(Et,null)},pt=a(143),_t=a.n(pt),vt=(a(430),a(220)),gt=a.n(vt),ht=Object.freeze({topRatedMovies:{fetch:function(){return $.a.get("".concat(D,"/movie/top_rated"),{params:{api_key:Y,language:"ru-Ru"}})}},movieGenres:{fetch:function(){return $.a.get("".concat(D,"/genre/movie/list"),{params:{api_key:Y,language:"ru-Ru"}})}}}),Ft=Object.freeze({fill:function(e){return{type:L.TOP_RATED_FILMS_FILL,payload:e}},fillFilmGenre:function(e){return{type:L.GENRE_FILL,payload:e}},fetchAsync:function(){return function(){var e=Object(B.a)(X.a.mark((function e(t){var a,r,n,c,l,i;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L.TOP_RATED_FILMS_FETCH_ASYNC}),t(O.startFetching()),e.prev=2,e.next=5,ht.movieGenres.fetch();case 5:200===(a=e.sent).status?(r=a.data.genres,t(Ft.fillFilmGenre(r))):(console.log(a),n={status:a.status},t(O.setFetchingError(n))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(O.setFetchingError({status:e.t0.status,message:"Not authorized. Provide correct token please"}));case 12:return e.prev=12,e.next=15,ht.topRatedMovies.fetch();case 15:200===(c=e.sent).status?(l=c.data.results,t(Ft.fill(l))):(console.log(c),i={status:c.status},t(O.setFetchingError(i))),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(12),t(O.setFetchingError({status:401,message:"Not authorized. Provide correct token please"}));case 22:t(O.stopFetching());case 23:case"end":return e.stop()}}),e,null,[[2,9],[12,19]])})));return function(t){return e.apply(this,arguments)}}()}}),It=function(){var e=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e(Ft.fetchAsync())}),[e]);var t=Object(o.c)((function(e){return e.topMovies})),a=t.data,n=t.genres,c=Object(o.c)((function(e){return e.ui}));return{data:a,isFetching:c.isFetching,error:c.error,genres:n}}(),t=e.isFetching,a=e.data,c=e.error,l=e.genres,i=Object(r.useState)(!0),s=Object(me.a)(i,2),u=s[0],m=s[1],f=Object(r.useState)([]),E=Object(me.a)(f,2),d=E[0],p=E[1],_=401===c.status&&n.a.createElement("p",null,c.message),v=404===c.status&&n.a.createElement("p",null,"Not found!"),g=t&&n.a.createElement("p",null,"Loading data from API..."),h=n.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u043e\u0432\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432");Object(r.useEffect)((function(){if(0===d.length&&a.length>0&&l.length>0){var e=a&&a.map((function(e){var t,a,r=e.id,n=e.title,c=e.overview,i=e.poster_path,o=e.release_date,s=e.vote_count,u=e.vote_average,m=e.genre_ids;return{title:n,overview:c,key:r,poster:"".concat(U).concat(i),release_date:"".concat(_t()(o).format("D MMMM, YYYY")),vote_count:s,vote_average:u,genres:(t=m,a=l,t.map((function(e){var t=a.filter((function(t){return t.id===e}));return Object(me.a)(t,1)[0].name})).join(", "))}}));p(e),m(!1)}}),[u,d,a,l]);var F=[{title:"\u041f\u043e\u0441\u0442\u0435\u0440",dataIndex:"poster",key:"poster",render:function(e){return n.a.createElement("img",{src:e,alt:"poster",width:100})}},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"title",key:"title"},{title:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:"overview",key:"overview"},{title:"\u0414\u0430\u0442\u0430 \u0440\u0435\u043b\u0438\u0437\u0430",dataIndex:"release_date",key:"release_date"},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0432\u0448\u0438\u0445 \u043b\u044e\u0434\u0435\u0439",dataIndex:"vote_count",key:"vote_count"},{title:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043e\u0446\u0435\u043d\u043a\u0430",dataIndex:"vote_average",key:"vote_average"},{title:"\u0416\u0430\u043d\u0440\u044b",dataIndex:"genres",key:"genres"}],I=!t&&a.length>0&&n.a.createElement(G.a,{rowClassName:gt.a.tableRow,dataSource:d,columns:F,loading:u,onRow:function(e,t){return{onClick:function(){return ie(e.key)}}}});return n.a.createElement(n.a.Fragment,null,_,v,g,h,I)},bt=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(It,null))},Ot=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:z.root},n.a.createElement(Te,null)),n.a.createElement(i.b,{exact:!0,path:z.popularFilms},n.a.createElement(ue,null)),n.a.createElement(i.b,{exact:!0,path:z.film},n.a.createElement(lt,null)),n.a.createElement(i.b,{exact:!0,path:z.films},n.a.createElement(i.a,{to:z.topRatedFilms})),n.a.createElement(i.b,{exact:!0,path:z.latestFilms},n.a.createElement(dt,null)),n.a.createElement(i.b,{exact:!0,path:z.topRatedFilms},n.a.createElement(bt,null)),n.a.createElement(i.b,{exact:!0,path:z.example},n.a.createElement(K,null))))},yt=function(){return n.a.createElement(o.a,{store:x},n.a.createElement(i.c,{history:P},n.a.createElement(Ot,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(yt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,a){e.exports={movieTile:"styles_movieTile__2UE8v",card:"styles_card__1In4-",image:"styles_image__39cCA",label:"styles_label__ADTep","label--left":"styles_label--left__3S5Mr","label--right":"styles_label--right__CfLvU"}},78:function(e,t,a){e.exports={card:"styles_card__37aKz",label:"styles_label__3Imat","label--left":"styles_label--left__2DLO6","label--right":"styles_label--right__1DfvX"}},90:function(e,t,a){e.exports={similarFilms:"styles_similarFilms__3dQ5u",title:"styles_title__2346a"}},92:function(e,t,a){e.exports={container:"styles_container__zam0q",empty:"styles_empty__1Dzte",tableRow:"styles_tableRow__3IAxt"}},93:function(e,t,a){e.exports={recommended:"rec_recommended__2iuxQ",dots:"rec_dots__Rzf4e","poster-item":"rec_poster-item__3fN7M",rate:"rec_rate__1HIMs"}}},[[226,1,2]]]);
//# sourceMappingURL=main.70c21ad9.chunk.js.map