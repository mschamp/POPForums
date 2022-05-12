import tinymce from "tinymce/tinymce";
import * as Popper from "@popperjs/core/lib";
import * as signalR from "@microsoft/signalr";

// works
var connection = new signalR.HubConnectionBuilder().withUrl("/FeedHub").build();

// does not
tinymce.init({});

// does not
Popper.createPopper(null, null);
