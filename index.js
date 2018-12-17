function shoppingList() {
    $('#js-shopping-list-form').on('submit', event => {
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();

        $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                 </button>
             </div>
        </li>`);
    });

    $('.shopping-item').removeClass('shopping-item__checked');

    $('ul').on('click', '.shopping-item-toggle', function(event) {
        const targetItem = $(this);
        targetItem.closest('li').toggleClass('shopping-item__checked');
    });
    

    $('ul').on('click', '.shopping-item-delete', event => {
        const targetRemove = $(event.currentTarget);
        targetRemove.closest('li').remove();
    });
}

$(shoppingList);