// отправка запроса

export async function sendForm(body) {
  const response = await fetch(`/send.php`, {
    method: 'POST',
    body: JSON.stringify({
      name: `${body.name}`,
      email: `${body.email}`,
      message: `${body.message}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}
