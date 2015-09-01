var http = require('http');
var cheerio = require('cheerio');

var url = 'http://www.imooc.com/video/7965';

//解析章节内容
function filterChapter(html){
	console.log('-----------------开始解析数据--------------------\n');
	//把html信息加载到容器中
	var $ = cheerio.load(html);
	//处理html
	var chapters = $('.nano-content').find('ul');
	//遍历数组,chrreio的each函数
	var cursData = new Array();
	chapters.each(function(index,item){
		var chapter = $(this);
		//console.log(chapter.find('.sec-title').text()+'\n');
		var title = chapter.find('.sec-title').text();
		var videos = chapter.find('a');
		var chapterData = {
			chapterTitle:title,
			videos:[]
		}
		//遍历章节信息
		videos.each(function(index,item){
			var video = $(this);
			var title = video.text();
			chapterData.videos.push({
				title:video.text(),
				id:video.attr('href').split('video/')[1]
			});
		})
		cursData.push(chapterData);
		//console.log(chapter.find('a').text()+'\n');
	});
//	console.log(cursData);
	console.log('-----------------解析数据结束--------------------\n');
	return cursData;
}

//输出章节信息
function printfCourseData(courseData) {
	courseData.forEach(function(item,index){
		console.log(item.chapterTitle.trim());
		item.videos.forEach(function(item1,index1){
			console.log('\t'+item1.title+"("+item1.id+")");
		})
		
	});
};

http.get(url,function(res){
	var html = '';
	//获取数据
	res.on('data',function(data){
		html += data;
	});
	//获取数据结束
	res.on('end',function(){
		//console.log('获取数据结束,数据如下:\n');
		//console.log(html);
		//解析网页数据
		var courseData = filterChapter(html);
		printfCourseData(courseData);
	});
}).on('error',function(){	//获取错误的时候的处理
	console.log('获取课程数据失败！');
})
