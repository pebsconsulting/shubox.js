export function insertAtCursor(el, myValue) {
    if (document.selection) {
        el.focus();
        var sel = document.selection.createRange();
        sel.text = myValue;
    }
    else if (window.navigator.userAgent.indexOf('Edge') > -1) {
        var startPos_1 = el.selectionStart || 0;
        var endPos_1 = el.selectionEnd || 0;
        var pos = startPos_1 + myValue.length;
        el.value =
            el.value.substring(0, startPos_1) +
                myValue +
                el.value.substring(endPos_1, el.value.length);
        el.focus();
        el.setSelectionRange(pos, pos);
    }
    else if (el.selectionStart || el.selectionStart == 0) {
        var startPos = el.selectionStart || 0;
        var endPos = el.selectionEnd || 0;
        el.value =
            el.value.substring(0, startPos) +
                myValue +
                el.value.substring(endPos, el.value.length);
    }
    else {
        el.value += myValue;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0X2F0X2N1cnNvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL0BzaHVib3gvY29yZS9zcmMvaW5zZXJ0X2F0X2N1cnNvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLHlCQUF5QixFQUFvQixFQUFFLE9BQWU7SUFDbEUsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1FBQ3RCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7S0FDcEI7U0FBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUMxRCxJQUFJLFVBQVEsR0FBRyxFQUFFLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLFFBQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxVQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUVwQyxFQUFFLENBQUMsS0FBSztZQUNOLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFRLENBQUM7Z0JBQy9CLE9BQU87Z0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNoQztTQUFNLElBQUksRUFBRSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtRQUN0RCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsS0FBSztZQUNOLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7Z0JBQy9CLE9BQU87Z0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0M7U0FBTTtRQUNMLEVBQUUsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQyJ9