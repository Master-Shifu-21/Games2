const container = document.querySelector('.card__container');

if (container) {
  container.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-delete')) {
      // в условии находим кнопку
      // затем находим ближайшего родителя кнопки, т.е. карточку, или div с классом card
      const card = e.target.closest('.card');
      // достаем через деструктуризацию id с помощью атрибута dataset
      const { id } = card.dataset;
      const res = await fetch(`/api/games/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      // на данном этапе удаление будет работать с перезагрузкой страницы
      // чтобы сделать без перезагрузки, нужно добавить условие и
      // удалять карточку на клиенте напрямую из DOM дерева
      if (data.message === 'success') {
        card.remove();
      } else {
        alert(data.message);
      }
    }

    if (e.target.classList.contains('btn-favorite')) {
      const card = e.target.closest('.card');
      console.log(card, 'yoyoyo');
      const { id } = card.dataset;
      console.log(id);
      const res = await fetch('/api/favorites', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      });
      const data = await res.json();
    }

    if (e.target.classList.contains('btn-remove-favorite')) {
      const card = e.target.closest('.card');

      const { id } = card.dataset;

      const res = await fetch(`/api/favorites/${id}`, {
        method: 'delete',
      });
      const data = await res.json();
      if (data.message === 'success') {
        card.remove();
      } else {
        alert(data.message);
      }
    }
  });
}
