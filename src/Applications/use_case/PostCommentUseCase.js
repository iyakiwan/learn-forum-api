const PostComment = require('../../Domains/comments/entities/PostComment');

class PostCommentUseCase {
  constructor({ threadRepository, commentRepository }) {
    this._threadRepository = threadRepository;
    this._commentRepository = commentRepository;
  }

  async execute(payload) {
    const comment = new PostComment(payload);

    await this._threadRepository.checkThread(comment.threadId);

    return this._commentRepository.postComment(comment);
  }
}

module.exports = PostCommentUseCase;
