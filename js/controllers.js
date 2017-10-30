angular.module('app.controllers', ['ionic','ngCordova'])
  
.controller('homeCtrl', function ($scope,$http,$ionicPopup,$state,$ionicHistory,$stateParams) {
	$scope.user = {};
    
$scope.loggedin_email= sessionStorage.getItem('loggedin_name');
$scope.mypackage0= sessionStorage.getItem('mypackage0');
			viewforum="http://cipm.cloudserve.com.ng/APIs/home.php?email="+$scope.loggedin_email;
			$http.get(viewforum)
        .success(function (res){
		$scope.details = res; 
                
            $scope.count = $scope.details.count;
				if($scope.details.count=="0"){
                     $scope.info= "No topic in this forum";
                            }
                else{
                     $scope.info= "Available topics in this forum:";
                
                }

            });


})  
.controller('addforumCtrl',function($scope,$http,$ionicPopup,$state,$ionicHistory,$stateParams) {

		$scope.user = {};

$scope.loggedin_email= sessionStorage.getItem('loggedin_name');
$scope.mypackage0= sessionStorage.getItem('mypackage0');
			viewforum="http://cipm.cloudserve.com.ng/APIs/forum.php?email="+$scope.loggedin_email;
			$http.get(viewforum)
        .success(function (res){
		$scope.details = res; 
         $scope.lo = "pay1()";       
            $scope.count = $scope.details.count;
				if($scope.details.count=="0"){
                     $scope.info= "No topic in this forum";
                            }
                else{
                     $scope.info= "Available topics in this forum:";
                
                }
  	
			});
$scope.pay = function() {
    $scope.forumID = $scope.details.forumID0;
sessionStorage.setItem('forumID', $scope.forumID);
$state.go('menu.comments', {}, {location: "replace", reload: true});                    
};
$scope.pay1 = function() {
    $scope.forumID = $scope.details.forumID1;
sessionStorage.setItem('forumID', $scope.forumID);
$state.go('menu.comments', {}, {location: "replace", reload: true});                    
};
$scope.pay2 = function() {
    $scope.forumID = $scope.details.forumID2;
sessionStorage.setItem('forumID', $scope.forumID);
$state.go('menu.comments', {}, {location: "replace", reload: true});                    
};
$scope.pay3 = function() {
    $scope.forumID = $scope.details.forumID3;
sessionStorage.setItem('forumID', $scope.forumID);
$state.go('menu.comments', {}, {location: "replace", reload: true});                    
};
$scope.pay4 = function() {
    $scope.forumID = $scope.details.forumID4;
sessionStorage.setItem('forumID', $scope.forumID);
$state.go('menu.comments', {}, {location: "replace", reload: true});                    
};
		$scope.add = function() {
			addstr="http://cipm.cloudserve.com.ng/APIs/addtoforum.php?email="+$scope.loggedin_email+"&coursecode="+$scope.user.coursecode+"&title="+$scope.user.title+"&question="+$scope.user.question+"&package="+$scope.mypackage0;
			$http.get(addstr)
			.success(function (response){
                
			$scope.details = response;
				if($scope.details.status=="1"){
                    
                var alertPopup = $ionicPopup.alert({
                title: 'Success!',
				template: $scope.details.details
                    }); 
          $state.go('menu.home', {}, {location: "replace", reload: true});
                            }
                else{
        			var alertPopup = $ionicPopup.alert({
                    title: 'Failed!',
				template: $scope.details.details
                    }); 
            $state.go('paynow', {}, {location: "replace", reload: true});                    
                }
  	
			});
		};
})
   
.controller('paymentCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$http,$rootScope,$ionicHistory,$state, $stateParams) {
		$scope.pack = {};    
$scope.loggedin_email= sessionStorage.getItem('loggedin_name');
$scope.pay = function() {
    				 delete sessionStorage.packprice;
    				 delete sessionStorage.site_reference;
    				 delete sessionStorage.loggedin_fullname;
sessionStorage.setItem('packname', $scope.pack.packname);

str="http://cipm.cloudserve.com.ng/APIs/payment.php?user="+$scope.loggedin_email+"&package="+$scope.pack.packname;
$http.get(str)
.success(function (response){
			     $scope.pack_details = response;
				sessionStorage.setItem('packprice', $scope.pack_details.price);
                sessionStorage.setItem('site_reference', $scope.pack_details.site_reference);
                sessionStorage.setItem('loggedin_fullname', $scope.pack_details.name);
               lastView = $ionicHistory.backView();
				console.log('Last View',lastView);        
                 $state.go('menu.paynow', {}, {location: "replace", reload: true});
			}).error(function() {
                
					var alertPopup = $ionicPopup.alert({
						title: 'Error!',
                    template: 'This package no longer exists!'

					});

			});  
};


})

.controller('paynowCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$rootScope,$ionicHistory,$state, $stateParams) {
    
    $scope.submitForm =function($scope,$rootScope,$ionicHistory,$state, $stateParams)
{
document.form1.target = "myActionWin";
window.open("","myActionWin","width=500,height=300,toolbar=0");
document.form1.submit();
};
    $scope.packname= sessionStorage.getItem('packname');
    $scope.packprice= sessionStorage.getItem('packprice');
    $scope.site_reference= sessionStorage.getItem('site_reference');
    $scope.email= sessionStorage.getItem('loggedin_name');
     $scope.fullname= sessionStorage.getItem('loggedin_fullname');
    //				delete sessionStorage.packprice;
      //              delete sessionStorage.packname;



}    

)
   
.controller('menuCtrl',function ($scope,$http,$rootScope,$ionicHistory,$state, $stateParams) {
            $scope.email= sessionStorage.getItem('loggedin_name');

				$scope.logout=function(){
		string="http://cipm.cloudserve.com.ng/APIs/logout.php?email="+$scope.email;
			$http.get(string)
			.success(function (response){
			$scope.logout_note = response;
            				 delete sessionStorage.loggedin_name;
				delete sessionStorage.loggedin_password;
				delete sessionStorage.loggedin_phone;
				delete sessionStorage.loggedin_path;
				delete sessionStorage.loggedin_content;  
        $state.go('login', {}, {location: "replace", reload: true});
  	
			}).error(function() {
					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
                    template: 'Please check your credentials!'

					});
			});
        };
})
   
.controller('loginCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory, $cordovaDevice,$ionicPlatform) {
    
    var init = function () {
      console.log("initializing device");
      try {
        document.addEventListener("deviceready", function () {
          $scope.available = $cordovaDevice.getDevice().available;
          $scope.cordova = $cordovaDevice.getCordova();
          $scope.model = $cordovaDevice.getModel();
          $scope.platform = $cordovaDevice.getPlatform();
          $scope.uuid = $cordovaDevice.getUUID();
          $scope.version = $cordovaDevice.getVersion();
        }, false);
      }
      catch (err) {
        console.log("Error " + err.message);
        alert("error " + err.$$failure.message);
      }
    };

    init();

		$scope.user = {};
    $scope.st = 'devic';
		$scope.login = function() {
   	            var alertPopup1 = $ionicPopup.show({
				title: 'Loging in!',
                template: '<img ng-src="img/3.gif"  ng-model="ig" id="loading"  />'
					}); 

// SpinnerDialog.show([title], [message], [cancelCallback])
			str="http://cipm.cloudserve.com.ng/APIs/login.php?email="+$scope.user.email+"&password="+$scope.user.password+"&uuid="+$scope.uuid;
			$http.get(str)
			.success(function (response){
			$scope.user_details = response;
                sessionStorage.setItem('couse_title0', $scope.user_details.couse_title0);
				sessionStorage.setItem('no_of_package', $scope.user_details.no_of_package);
				sessionStorage.setItem('loggedin_name', $scope.user_details.email);
				sessionStorage.setItem('loggedin_id', $scope.user_details.password);
				sessionStorage.setItem('loggedin_phone', $scope.user_details.phone);
                sessionStorage.setItem('loggedin_path', "http://cipm.cloudserve.com.ng/APIs/path/tt.txt");
                
                if($scope.user_details.no_of_package=="1"){
				sessionStorage.setItem('mypackage0', $scope.user_details.mypackage0);
                }
                else if($scope.user_details.no_of_package=="2"){
				sessionStorage.setItem('mypackage0', $scope.user_details.mypackage0);
				sessionStorage.setItem('mypackage1', $scope.user_details.mypackage1);
                    
                }
                else if($scope.user_details.no_of_package=="3"){
				sessionStorage.setItem('mypackage0', $scope.user_details.mypackage0);
				sessionStorage.setItem('mypackage1', $scope.user_details.mypackage1);
				sessionStorage.setItem('mypackage2', $scope.user_details.mypackage2);
                }
                
				$ionicHistory.nextViewOptions({
					disableAnimate: true,
					disableBack: true
				});
				lastView = $ionicHistory.backView();
				console.log('Last View',lastView);
                				if($scope.user_details.status=="1"){
                                  alertPopup1.close();
                            $state.go('menu.home', {}, {location: "replace", reload: true});

                                }
                else{
                                  alertPopup1.close();
        					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
				template: $scope.user_details.details +'<a href="#/signup"  class="button button-positive button-clear button-block ">create an account</a> <br/>  <a href="#/logout"  class="button button-positive button-clear button-block ">Logout of all sessions</a>'

					}); 
                    
            $state.go('login', {}, {location: "replace", reload: true});
            
                }
  	
			}).error(function() {
                
					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
                    template: 'Please check your credentials!'

					});

			});
		};
		
})


.controller('forgotpassCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory) {
		$scope.user = {};
		
		$scope.forgot = function() {
			fpstr="http://cipm.cloudserve.com.ng/APIs/forgot.php?email="+$scope.user.email;
			$http.get(fpstr)
			.success(function (response){
			$scope.details = response;
				if($scope.details.status=="1"){
                var alertPopup = $ionicPopup.alert({
                title: 'Success!',
				template: $scope.details.details
                    }); 
          $state.go('login', {}, {location: "replace", reload: true});
                            }
                else{
        			var alertPopup = $ionicPopup.alert({
                    title: 'Failed!',
				template: $scope.details.details
                    }); 
            $state.go('forgotpass', {}, {location: "replace", reload: true});                    
                }
  	
			});
		};
		
})



.controller('logoutCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory) {
		$scope.user = {};
		
		$scope.forgot = function() {
			fpstr="http://127.0.0.1/course/APIs/logout.php?email="+$scope.user.email;
			$http.get(fpstr)
			.success(function (response){
			$scope.details = response;
				if($scope.details.status==1){
                var alertPopup = $ionicPopup.alert({
                title: 'Success!',
				template: $scope.details.details
                    }); 
          $state.go('login', {}, {location: "replace", reload: true});
                            }
                else{
        			var alertPopup = $ionicPopup.alert({
                    title: 'Failed!',
				template: $scope.details.details
                    }); 
            $state.go('logout', {}, {location: "replace", reload: true});                    
                }
  	
			});
		};
		
})
.controller('contentCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory) {
    		$scope.datas = {};

            
                $scope.loggedin_email= sessionStorage.getItem('loggedin_name');
             $scope.loggedin_password= sessionStorage.getItem('loggedin_password');
    		$scope.loggedin_phone= sessionStorage.getItem('loggedin_phone');
		      $scope.loggedin_path= sessionStorage.getItem('loggedin_path');
    
    			str="http://cipm.cloudserve.com.ng/APIs/read.php?email="+$scope.loggedin_email+"&password="+$scope.loggedin_password+"&path="+$scope.loggedin_path;
			$http.get(str)
			.success(function (response){
			     $scope.user_details = response;
				sessionStorage.setItem('loggedin_contents', $scope.user_details.cont);
				
                lastView = $ionicHistory.backView();
				console.log('Last View',lastView);
			}).error(function() {
                
					var alertPopup = $ionicPopup.alert({
						title: 'Error!',
                    template: 'no content here!'

					});

			});
    		      $scope.loggedin_content= sessionStorage.getItem('loggedin_contents');
    
})
   
.controller('signupCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory,$cordovaDevice) {
$scope.data = {};
	$scope.signup=function(){
   				var alertPopup1 = $ionicPopup.show({
				title: 'Registering...',
                template: '<img ng-src="img/3.gif"  ng-model="ig" id="loading"  />'
					}); 		
			link = "http://cipm.cloudserve.com.ng/APIs/registration.php?first_name="+$scope.data.first_name+"&last_name="+$scope.data.last_name+"&phone="+$scope.data.phone+"&password="+$scope.data.password+"&email="+$scope.data.email+"&city="+$scope.data.city+"&state="+$scope.data.state+"&job="+$scope.data.job;
        $http.get(link)
			.success(function (res){	
				$scope.response = res; 
				
				
				if($scope.response.status=="1"){
					$scope.title="Account Created!";
					$scope.template="Your account has been successfully created!";
					
					//no back option
					$ionicHistory.nextViewOptions({
						disableAnimate: true,
						disableBack: true
					});
					$state.go('login', {}, {location: "replace", reload: true});
				
				}else if($scope.response.status=="0"){
					$scope.title="Error";
					$scope.template= $scope.response.details;

				
				}else{
					$scope.title="Failed";
					$scope.template="Contact Our Technical Team";

				}
                alertPopup1.close();
				var alertPopup = $ionicPopup.alert({
						title: $scope.title,
						template: $scope.template
				});
				
				
			});
			
	}
})


   
.controller('materialsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('commentsCtrl',function ($scope,$http,$ionicPopup,$state,$ionicHistory,$stateParams) {
		$scope.user = {};
$scope.forumID= sessionStorage.getItem('forumID');
$scope.loggedin_email= sessionStorage.getItem('loggedin_name');
$scope.forum = "14CiTV/4IDowQ";
$scope.mypackage0= sessionStorage.getItem('mypackage0');
			viewcomment="http://cipm.cloudserve.com.ng/APIs/comment.php?email="+$scope.loggedin_email+"&forumID="+$scope.forumID;
			$http.get(viewcomment)
            			.success(function (resp){
		$scope.detail = resp; 
            $scope.count = $scope.detail.count;
				if($scope.detail.count=="0"){
                     $scope.inf= "No topic in this forum";
                            }
                else{
                     $scope.inf= "Below are the comments available for this topic:";
  
                }
  	
			}).error(function() {
                
					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
                    template: 'Please check your credentials!'

					});

			});
$scope.pay = function() {
    $state.go('menu.home', {}, {location: "replace", reload: true});                    

};
    
		$scope.add = function() {
			addstr="http://cipm.cloudserve.com.ng/APIs/addcomment.php?email="+$scope.loggedin_email+"&forumID="+$scope.forumID+"&comment="+$scope.user.comment;
			$http.get(addstr)
			.success(function (resp){
			$scope.details = resp;
				if($scope.details.status=="1"){
                var alertPopup = $ionicPopup.alert({
                title: 'Success!',
				template: $scope.details.details
                    }); 
          $state.go('menu.home', {}, {location: "replace", reload: true});
                            }
                else{
        			var alertPopup = $ionicPopup.alert({
                title: "Failed!",
				template: $scope.details.details
                    }); 
                }
  	
			});
		};
})