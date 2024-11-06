const todo_form = document.getElementById('todo_form');
const todo_btn = document.getElementById('todo_btn')

const add_todo_form = () => {
    return (todo_form.innerHTML += '\
                    <form class=" border-2 mt-2">\
                        <div class="flex justify-center pt-2">\
                            <div class=" font-serif">\
                                <p>Task Title</p>\
                                <input type="text" class="border-2 w-[26vw] rounded-md pl-2">\
                                <p>Description</p>\
                                <input type="text" class="border-2 w-[26vw] rounded-md pl-2">\
                                <p>Due Date/Date</p>\
                                <input type="date" name="" id="" class="border-2 w-[26vw] rounded-md pl-2">\
                            </div>\
                        </div>\
                        <div class=" flex justify-around mt-2 pb-2">\
                            <button type="submit" id="form_save" class=" border-2 pl-2 pr-2 rounded-xl bg-slate-200 hover:bg-green-500" style="transition-duration: 0.5s;">Save</button>\
                            <button id="form_cancel" class=" border-2 pl-2 pr-2 rounded-xl bg-slate-200 hover:bg-red-500" style="transition-duration: 0.5s;">Cancel</button>\
                        </div>\
                    </form>\
                    ');
}

todo_btn.addEventListener('click', add_todo_form);

// todo_form.innerHTML += '\
//                         <form>\
//                         <div class="flex justify-center mt-3">\
//                             <div class=" font-serif">\
//                                 <p>Task Title</p>\
//                                 <input type="text" class="border-2 w-[26vw] rounded-md pl-2">\
//                                 <p>Description</p>\
//                                 <input type="text" class="border-2 w-[26vw] rounded-md pl-2">\
//                                 <p>Due Date/Date</p>\
//                                 <input type="date" name="" id="" class="border-2 w-[26vw] rounded-md pl-2">\
//                             </div>\
//                         </div>\
//                         <div class=" flex justify-around mt-2">\
//                             <button type="submit" id="form_save" class=" border-2 pl-2 pr-2 rounded-xl bg-slate-200 hover:bg-green-500" style="transition-duration: 0.5s;">Save</button>\
//                             <button id="form_cancel" class=" border-2 pl-2 pr-2 rounded-xl bg-slate-200 hover:bg-red-500" style="transition-duration: 0.5s;">Cancel</button>\
//                         </div>\
//                     </form>\
//                     ';