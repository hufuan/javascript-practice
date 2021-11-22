//Backbone model
var Blog = Backbone.Model.extend({
    default: {
        author: '',
        title: '',
        url: ''
    }
});

var Blogs = Backbone.Collection.extend({});

var blog1 = new Blog({author: 'Michael', title: 'Michael\'s blog', url: 'http://michaelsblog.com'});
var blog2 = new Blog({author: 'John', title: 'John\'s blog', url: 'http://johnsblog.com'});
var blogs = new Blogs();
//Backbone Views
var BlogView = Backbone.View.extend({
    model: new Blog(),
    tagName: 'tr',
    initialize: function() {
        this.template = _.template($('.blogs-list-template').html());
        //this.template =  null
    },
    render: function() {
        this.$el.html(this.template( this.model.toJSON() ) )
        return this;
    } 
});

//Backbone blogs views
var BlogsView = Backbone.View.extend({
    model: blogs,
    el: $('.blogs-list'),
    initialize: function() {
        this.model.on('add', this.render, this);
    },
    render: function() {
        var self = this;
        this.$el.html('');
        _.each(this.model.toArray(), function(blog) {
               self.$el.append( (new BlogView({model: blog}) ).render().$el);
        });
        return this;
    }
});
var blogsView = new BlogsView();

$(document).ready(function(){
    $('.add-blog').on('click', function(){
        var blog = new Blog({
            author: $('.author-input').val(),
            title:  $('.title-input').val(),
            url:  $('.url-input').val(),
        });
        $('.author-input').val('');
        $('.title-input').val('');
        $('.url-input').val('');
        console.log(blog.toJSON());
        blogs.add(blog);
    })
})