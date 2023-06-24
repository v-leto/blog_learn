const Post = () => {
	return (
		<div className="post">
			<div className="image">
				<img src="https://www.omegawatches.com/media/wysiwyg/001-ats_event-ALL-large.jpg" />
			</div>
			<div className="texts">
				<h2>An Evening of Colour</h2>
				<p className="info">
					<a className="author">Dawid Mondo</a>
					<tine>2023/2/22 19:11</tine>
				</p>
				<p className="summary">
					The event was hosted at Somerset House and delivered a multisensory
					experience based around the nine unique colours of the collection –
					from Atlantic Blue through to Bay Green, and Terracotta. Surprises
					were unveiled around every corner, as guests were able to roam through
					nine dedicated installations of art.
				</p>
			</div>
		</div>
	);
};

export default Post;
