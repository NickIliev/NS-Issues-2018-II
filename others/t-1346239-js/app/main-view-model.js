var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();

    viewModel.message = new Date("2018-06-14T12:01:06").toString();

    return viewModel;
}

exports.createViewModel = createViewModel;