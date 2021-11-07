<?php

namespace app;

use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\exception\Handle;
use think\exception\HttpException;
use think\exception\HttpResponseException;
use think\exception\ValidateException;
use think\Response;
use Throwable;
use think\facade\View;

/**
 * 应用异常处理类
 */
class ExceptionHandle extends Handle
{
    /**
     * 不需要记录信息（日志）的异常类列表
     * @var array
     */
    protected $ignoreReport = [
        HttpException::class,
        HttpResponseException::class,
        ModelNotFoundException::class,
        DataNotFoundException::class,
        ValidateException::class,
    ];

    /**
     * 记录异常信息（包括日志或者其它方式记录）
     *
     * @access public
     * @param  Throwable $exception
     * @return void
     */
    public function report(Throwable $exception): void
    {
        // 使用内置的方式记录异常日志
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @access public
     * @param \think\Request   $request
     * @param Throwable $e
     * @return Response
     */
    public function render($request, Throwable $e): Response
    {
        // dump($e);
        // 添加自定义异常处理机制
        switch (ENV) {
            case 'development':
                break;
            default:
                if (!isset($request->param()['wxxbb'])) {
                    return Response::create(
                        View::display('', [
                            'json_data' => [
                                'kvpcjcl7_404' => true,
                            ]
                        ]),
                        'html',
                        404
                    );
                }
        }
        // 其他错误交给系统处理
        return parent::render($request, $e);
    }
    /**
     * @access protected
     * @param Throwable $exception
     * @return Response
     */
    protected function convertExceptionToResponse(Throwable $exception): Response
    {
        // 修改异常响应默认返回 text/html
        if ($this->isJson) {
            dump('已修改异常响应默认返回 text/html');
        }
        $this->isJson = false;

        return parent::convertExceptionToResponse($exception);
    }
}
