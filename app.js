var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope', 'posts',
    function ($scope, posts) {
        $scope.posts = posts.posts;

        $scope.posts = [
            {
                title: 'post 1',
                upvotes: 5,
                comments: [
                    {
                        body: 'this a comment',
                        upvotes: 0
                    },
                    {
                        body: 'comment 2',
                        upvotes: 0
                    }]
            },
            {
                title: 'post 2',
                upvotes: 2,
                comments: []
            },
            {
                title: 'post 3',
                upvotes: 15,
                comments: []
            },
            {
                title: 'post 4',
                upvotes: 9,
                comments: []
            },
            {
                title: 'post 5',
                upvotes: 4,
                comments: []
            }];

        $scope.addPost = function () {
            if (!$scope.title || $scope.title === '') {
                return;
            } // return if user didn't enter a title
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0,
                comments: []
            });
            $scope.title = ''; //reset title
            $scope.link = ''; //reset title
        };

        $scope.addComment = function (post, comment) {
            post.comments.push({
                body: comment,
                upvotes: 0
            });
        };

        $scope.incrementUpvotes = function (post) {
            post.upvotes += 1;
        };

        $scope.upvoteComment = function (comment) {
            comment.upvotes += 1;
        };
    }
]);

app.factory('posts', [function () {
    var o = {
        posts: []
    };
    return o;
}]);