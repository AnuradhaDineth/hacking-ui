import React, { Component } from "react";

class ReviewCard extends Component {
  render() {
    return (
      <div className="bg-gray-50 rounded-2xl m-5">
        <div className="text-left pl-4 mt-6">
          <label className="text-gray-700 font-bold text-2xl">
            {this.props.topic}
          </label>
        </div>
        <div className="mt-9 text-left pl-4 mb-8">
          <label className="text-gray-800 text-base">{this.props.msg}</label>
        </div>

        <div className="py-8 px-4 max-w-sm mx-auto bg-gray-50 rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mb-10">
          <img
            className="block mx-auto sm:h-24 md:h-16 rounded-full sm:mx-0 sm:shrink-0"
            src={this.props.img}
            alt="Woman's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="sm:text-lg md:text-base text-gray-700 font-semibold">
                {this.props.name}
              </p>
              <p className="text-green-600 font-semibold text-sm">
                {this.props.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewCard;
