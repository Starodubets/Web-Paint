
var FigureWithText = {
    getName(){
        return "SimpleFigurePlugin";
    },

    getPluginsMenuItem(){
        return $('<div/>', {
            "class": 'checkbox'
        }).append(
            $('<label/>').append(
                $('<input/>', {
                    "type": 'checkbox',
                    "checked": 'checked'
                })
            ).append("Figure with text")
        )
    },

    getEditMenu() {
        return $.parseHTML('\
							<li class="dropdown-submenu">\
                                <a class="subMenuHeader">Figure<span class="caret"></span></a>\
                                <ul class="dropdown-menu">\
                                    <li class="dropdown-submenu"><a class="subMenuHeader">Type<span class="caret"></span></a>\
                                        <ul class="dropdown-menu">\
                                            <li><a>Line</a></li>\
                                            <li><a>Rectangle</a></li>\
                                            <li><a>RRectangle</a></li>\
                                            <li><a>Ellipse</a></li>\
                                        </ul>\
                                    </li>\
                                    <li>\
                                        <label style="padding: 0 20px">Color\
                                            <input class="form-control" type="color" value="#563d7c" style="display: inline-block">\
                                        </label>\
                                    </li>\
                                    <li class="dropdown-submenu"><a class="subMenuHeader">Width<span class="caret"></span></a>\
                                        <ul class="dropdown-menu">\
                                            <li><a>1</a></li>\
                                            <li><a>5</a></li>\
                                            <li><a>10</a></li>\
                                            <li><a>15</a></li>\
                                            <li><a>20</a></li>\
                                        </ul>\
                                    </li>\
                                </ul>\
                            </li>\
                            ');
    },

    getToolBar() {

    },

    getLeftToolBox(){
        return $.parseHTML('\
                        <div class="panel-body pluginElement">\
                            <button type="button" class="btn btn-primary btn-block pluginBtn">Figure with text</button>\
                        </div>\
                        ');
    },

    getRightToolBox(){
        var rightToolBox = $.parseHTML('\
        					<div class="panel-body">\
                                <label>Type:</label>\
                                <div class="btn-group-vertical">\
                                    <button id = "line" type="button" class="typeBtn btn btn-default" onclick="ChangeType(this.id)">Line</button>\
                                    <button id = "rect" type="button" class="typeBtn btn btn-primary" onclick="ChangeType(this.id)">Rectangle</button>\
                                    <button id = "rrect" type="button" class="typeBtn btn btn-default" onclick="ChangeType(this.id)">RRectangle</button>\
                                    <button id = "ellipse" ype="button" class="typeBtn btn btn-default" onclick="ChangeType(this.id)">Ellipse</button>\
                                </div>\
                            </div>\
                            <div class="panel-body">\
                                <label>Color</label>\
                                <input class="form-control" type="color" value="#563d7c" style="display: inline-block" id="colorid" >\
                            </div>\
                            <div class="panel-body">\
                                <label>Width</label>\
                                <select class="form-control lineWidth" id = "widthid">\
                                    <option>1</option>\
                                    <option>5</option>\
                                    <option>10</option>\
                                    <option>15</option>\
                                    <option>20</option>\
                                </select>\
                            </div>\
                            ');
        $(".typeBtn", rightToolBox).click(this.XCommand.setType);
        return rightToolBox;
    },

    XCommand: {
        setColor(){
            //alert("setColor");
        },
        setType(){
            //alert("setType");
        },
        setWidth(){
            //alert("setWidth");
        }
    }
};


