///* recommended */
//(function () {
//	angular
//		.module('shared')
//		.config(exceptionConfig);

//	exceptionConfig.$inject = ['$provide'];

//	function exceptionConfig($provide) {
//		$provide.decorator('$exceptionHandler', extendExceptionHandler);
//	}

//	extendExceptionHandler.$inject = ['$delegate'];

//	function extendExceptionHandler($delegate) {
//		return function (exception, cause) {
//			$delegate(exception, cause);
//			var errorData = {
//				exception: exception,
//				cause: cause
//			};
//			console.debug(errorData);
//			/**
//			 * Could add the error to a service's collection,
//			 * add errors to $rootScope, log errors to remote web server,
//			 * or log locally. Or throw hard. It is entirely up to you.
//			 * throw exception;
//			 */
//			//toastr.error(exception.msg, errorData);
//		};
//	}
//})();

//(function () {

//	angular
//		.module('shared')	
//		.factory('exception', exception);

//	exception.$inject = ['logger'];

//	function exception(logger) {
//		var service = {
//			catcher: catcher
//		};
//		return service;

//		function catcher(message) {
//			return function (reason) {
//				logger.error(message, reason);
//			};
//		}
//	}
//})();